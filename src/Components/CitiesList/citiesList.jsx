import React, { Component } from 'react'
import axios from 'axios';
import parse from "html-react-parser";
import citiesJson from "../../assets/cities.json";

export class CitiesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maps: '',
            nameCity: [],
            codCity: [],
            listCity: '',
            message: '',
        };
        this.listCitiesForStates = this.listCitiesForStates.bind(this);
    }

    listCitiesForStates() {
        let selectedState = document.getElementById("select-states");
        var optionSelectedState = selectedState.options[selectedState.selectedIndex];
        let selectedYear = document.getElementById("select-year");
        var optionSelectedYear = selectedYear.options[selectedYear.selectedIndex];
        if (!optionSelectedState) {
            optionSelectedState = "12";
        }

        console.log(optionSelectedState.value)
        const getCities = async () => {
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
                    var newLi = [];
                    var returnCities = citiesJson.filter(procurarValores);
                    returnCities.forEach(retornar => {
                        newLi += '<li id="' + retornar.id_munic + '">' + retornar.nomemun + '</li>';
                    })
                    this.setState({ listCity: parse(newLi) });
                }

            } catch (err) {
                console.log(err)
            }
        }
        getCities();
    }



    render() {
        return (
            <div >
                <button onClick={this.listCitiesForStates}>Botão Cities List</button>
                <ul id="list-cities">
                </ul>
            </div>
        )
    }
}

export default CitiesList
