import React, { Component, useState } from 'react';
import axios from 'axios';
import parse from "html-react-parser";
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
        if (!optionSelectedState) {
            optionSelectedState = "12";
        }
        const getMaps = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/estados/" + optionSelectedState.value + "?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio");
                this.setState({ maps: parse(res.data.split("?>")[1]) });


                //console.log(this.state.maps.props.children.props.children[0].props.id)
                let variavel = document.getElementById(this.state.maps.props.children.props.children[0].props.id);
                variavel.style.fill = "green";
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
                    <select>
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
