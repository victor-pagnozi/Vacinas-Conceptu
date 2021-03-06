import React, { Component } from 'react';
import axios from 'axios';
import parse from "html-react-parser";
import citiesJson from "../../assets/cities.json";
import statesJson from "../../assets/states.json";
import CaptionBar from '../CaptionBar/captionBar';
import { ContainerMaps, Selects } from './styles';
import ReactLoading from "react-loading";

export class maps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maps: '',
            uf: statesJson,
            nameCity: [],
            codCity: [],
            done: undefined,
        };
        this.updateMaps = this.updateMaps.bind(this);
    }

    updateMaps() {
        let selectedState = document.getElementById("select-states");
        var optionSelectedState = selectedState.options[selectedState.selectedIndex];

        let selectedYear = document.getElementById("select-year");
        var optionSelectedYear = selectedYear.options[selectedYear.selectedIndex];
        var arrayNameCitie = [];
        var arrayCodCitie = [];

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

                    function procurarValores(value) {
                        if (value.id_munic == variavel.id & value.ano == optionSelectedYear.value)
                            return value;
                    }
                    var retornarNumeros = citiesJson.filter(procurarValores);
                    retornarNumeros.forEach(retornar => {
                        variavel.setAttribute("data-city", retornar.nomemun);
                        variavel.setAttribute("data-city", retornar.nomemun);
                        variavel.setAttribute("percentage-city", retornar.cob_vac_bcg);
                        arrayNameCitie.splice(1, 0, retornar.nomemun);
                        arrayCodCitie.splice(1, 0, retornar.id_munic);

                        switch (true) {
                            case (retornar.cob_vac_bcg >= 0.0 && retornar.cob_vac_bcg <= 10.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-zero-dez");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-zero-dez")
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 11.0 && retornar.cob_vac_bcg <= 20.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-onze-vinte");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-onze-vinte");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 21.0 && retornar.cob_vac_bcg <= 30.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-vinteUm-trinta");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-vinteUm-trinta");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 31.0 && retornar.cob_vac_bcg <= 40.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-trintaUm-quarenta");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-trintaUm-quarenta");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 41.0 && retornar.cob_vac_bcg <= 50.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-quarentaUm-cinquenta");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-quarentaUm-cinquenta");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 51.0 && retornar.cob_vac_bcg <= 60.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-cinquentaUm-sessenta");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-cinquentaUm-sessenta");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 61.0 && retornar.cob_vac_bcg <= 70.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-sessentaUm-setenta");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-sessentaUm-setenta");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 71.0 && retornar.cob_vac_bcg <= 80.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-setentaUm-oitenta");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-setentaUm-oitenta");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 81.0 && retornar.cob_vac_bcg <= 90.9):
                                if (!variavel.classList) variavel.classList.add("fill-color-oitentaUm-noventa");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-oitentaUm-noventa");
                                }
                                break;
                            case (retornar.cob_vac_bcg >= 91.0 && retornar.cob_vac_bcg <= 100.0):
                                if (!variavel.classList) variavel.classList.add("fill-color-noventaUm-cem");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.add("fill-color-noventaUm-cem");
                                }
                                break;
                            default:
                                if (!variavel.classList) variavel.classList.add("fill-color-zero");
                                else {
                                    variavel.classList.remove(variavel.classList[0]);
                                    variavel.classList.remove(variavel.classList[0]);
                                }
                                break;
                        }
                        this.setState({ nameCity: arrayNameCitie });
                        this.setState({ codCity: arrayCodCitie });
                    })
                }
                this.setState({ done: true });
            } catch (err) {
                console.log(err)
                alert("Erro ao consultar o mapa no IBGE")
            }
        }
        getMaps();
    }
    componentDidMount() {
        this.updateMaps();
        this.renderCity();
        this.renderCityMap();
    }
    componentDidUpdate() {
        this.renderCity();
        this.renderCityMap();
    }
    renderRow(row) {
        return <option value={row}>{row}</option>
    }

    renderCity() {
        var wordCities = document.querySelectorAll(".list-cities li");
        wordCities.forEach(function (el) {
            el.addEventListener("mouseenter", function () {
                var cityCode = el.getAttribute("data-city");
                var svgState = document.getElementById(cityCode);
                if (el.classList) el.classList.add("on");
                else el.className += "on";
                if (svgState.classList) svgState.classList.add("on");
                else svgState.className += "on";
            });
            el.addEventListener("mouseleave", function () {
                var cityCode = el.getAttribute("data-city");
                var svgState = document.getElementById(cityCode);
                el.classList.remove("on");
                svgState.classList.remove(svgState.classList[1]);
            });
        });
    }

    renderCityMap() {
        var wordMap = document.querySelectorAll("svg g path");
        wordMap.forEach(function (el) {
            el.addEventListener("mouseenter", function () {
                var svgState = el.getAttribute("id");
                var cityCode = document.getElementById(svgState);
                console.log(svgState)
                el.classList.add("on");
                if (cityCode.classList) cityCode.classList.add("on");
                else cityCode.className += "on";
            });
            el.addEventListener("mouseleave", function () {
                var svgState = el.getAttribute("id");
                var cityCode = document.getElementById(svgState);
                el.classList.remove("on");
                cityCode.classList.remove("on");
            });
        });
    }

    renderRowCity(rowsCity) {
        return <li id={rowsCity} data-city={rowsCity}>{rowsCity}</li>
    }

    render() {
        let rows = [];
        for (let i = 2010; i <= 2019; i++) {
            rows.push(i)
        }
        if (rows.length == 0) {
            return <p>Nenhum item</p>
        }

        let rowsCity = [];
        var idCity = [];
        for (let j = 0; j <= this.state.codCity.length; j++) {
            rowsCity.push(this.state.codCity[j]);
            idCity.push(this.state.nameCity[j]);
            console.log(this.state.maps)
        }

        return (
            <ContainerMaps>
                <Selects>
                    <div>
                        <p>Selecione o Estado:</p>
                        <select onChange={this.updateMaps} id="select-states">
                            {this.state.uf.map((s) => (
                                <option value={s.id_estado}>{s.estado_abrev}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <p>Selecione o Ano que deseja visualizar: </p>
                        <select id="select-year" onChange={this.updateMaps}>
                            {rows.map(this.renderRow)}
                        </select>
                    </div>
                </Selects>

                <div className="render-map"
                //onMouseEnter={this.handleMouseHover}
                //onMouseLeave={this.handleMouseHover}
                >
                    {!this.state.done ? (
                        <div>
                            <ReactLoading
                                type={"cubes"}
                                color={"rgb(53, 126, 221)"}
                                height={100}
                                width={100}
                                className={"loadingPage"}
                            />
                        </div>
                    ) : (
                        this.state.maps
                    )
                    }
                </div>
                <CaptionBar />

                <ul className="list-cities">
                    {rowsCity.map(this.renderRowCity)}
                </ul>

            </ContainerMaps >
        )
    }
}

export default maps
