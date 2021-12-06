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
                console.log(this.state.maps)
            } catch (err) {
                console.log(err)
            }
        }
        getMaps();
    }

    render() {
        return (
            <ContainerMaps>
                <button onClick={this.updateMaps}>Carregar Mapa</button>
                {this.state.maps}
            </ContainerMaps>
        )
    }
}

export default maps
