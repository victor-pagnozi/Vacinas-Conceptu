import React, { Component, useState } from 'react';
import axios from 'axios';
import parse from "html-react-parser";
import citiesJson from "../../assets/cities.json";
import AC from "../../assets/AC.json";
import { ContainerMaps } from './styles';

export class maps extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            maps: '',
            isHovering: false,
        };
        this.updateMaps = this.updateMaps.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }
    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    updateMaps() {
        let selectedState = document.getElementById("select-states");
        var optionSelectedState = selectedState.options[selectedState.selectedIndex];

        let selectedYear = document.getElementById("select-year");
        var optionSelectedYear = selectedYear.options[selectedYear.selectedIndex];

        if (!optionSelectedState) {
            optionSelectedState = "12";
        }
        const getMaps = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/estados/" + optionSelectedState.value + "?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio");
                this.setState({ maps: parse(res.data.split("?>")[1]) });


                let countState = this.state.maps.props.children.props.children.length;
                for (let i = 0; i <= countState; i++) {
                    var variavel = document.getElementById(this.state.maps.props.children.props.children[i].props.id);
                    //let varListStatesSelected = this.state.maps.props.children.props.children;

                    function procurarValores(value) {
                        if (value.id_munic == variavel.id & value.ano == optionSelectedYear.value)
                            return value;
                    }
                    var retornarNumeros = citiesJson.filter(procurarValores);
                    retornarNumeros.forEach(retornar => {
                        console.log(retornar)

                        switch (true) {
                            case (retornar.cob_vac_bcg <= 10):
                                variavel.style.fill = "red";
                                break;
                            case (retornar.cob_vac_bcg >= 11 && retornar.cob_vac_bcg <= 20):
                                variavel.style.fill = "rgb(255, 76, 22)";
                                break;
                            case (retornar.cob_vac_bcg >= 21 && retornar.cob_vac_bcg <= 30):
                                variavel.style.fill = "rgb(255, 115, 0)";
                                break;
                            case (retornar.cob_vac_bcg >= 31 && retornar.cob_vac_bcg <= 40):
                                variavel.style.fill = "rgb(224, 172, 0)";
                                break;
                            case (retornar.cob_vac_bcg >= 41 && retornar.cob_vac_bcg <= 50):
                                variavel.style.fill = "yellow";
                                break;
                            case (retornar.cob_vac_bcg >= 51 && retornar.cob_vac_bcg <= 60):
                                variavel.style.fill = "rgb(166, 255, 0)";
                                break;
                            case (retornar.cob_vac_bcg >= 61 && retornar.cob_vac_bcg <= 70):
                                variavel.style.fill = "rgb(193, 255, 79)";
                                break;
                            case (retornar.cob_vac_bcg >= 71 && retornar.cob_vac_bcg <= 80):
                                variavel.style.fill = "rgb(94, 255, 0)";
                                break;
                            case (retornar.cob_vac_bcg >= 81 && retornar.cob_vac_bcg <= 90):
                                variavel.style.fill = "rgb(16, 124, 16)";
                                break;
                            case (retornar.cob_vac_bcg >= 91 && retornar.cob_vac_bcg <= 100):
                                variavel.style.fill = "green";
                                break;
                            default:
                                variavel.style.fill = "gray";
                                break;
                        }
                        //if(retornar.cob_vac_bcg <= 50){
                        //   variavel.style.fill = "red";
                        //}else{
                        //    variavel.style.fill = "green";
                        //}
                    })
                }

                //console.log(optionSelectedYear.value)
                //const busca1 = AC.find(variavel => variavel.id === variavel.id);

            } catch (err) {
                console.log(err)
            }
        }
        getMaps();

    }

    renderRow(row) {
        return <option value={row}>{row}</option>
    }

    render() {
        let rows = []
        for (let i = 2010; i <= 2021; i++) {
            rows.push(i)
        }
        if (rows.length == 0) {
            return <p>Nenhum item</p>
        }

        return (
            <ContainerMaps>
                <span className="year-span">
                    <p>Selecione o ano que deseja visualizar os dados: </p>
                    <select id="select-year">
                        {rows.map(this.renderRow)}
                    </select>
                </span>

                <button onClick={this.updateMaps}>Carregar Mapa</button>

                <div
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                >
                    {this.state.maps}
                </div>
                {
                    this.state.isHovering &&
                    <div>
                        Hover funcionando
                    </div>
                }
            </ContainerMaps>
        )
    }
}

export default maps
