import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Selects } from './styles';
import citiesJson from "../../assets/cities.json";
import statesJson from "../../assets/states.json";
import Maps from '../../Components/Maps/maps';

export default function Home() {
    const [city, setCity] = useState('');
    const [listCity, setListCity] = useState([]);
    const [uf, setUf] = useState(statesJson);
    const [listUf, setListUf] = useState([]);
    const [maps, setMaps] = useState([null]);
    const [idState, setIdState] = useState('');
    const [optionSelectedStateForCity, setOptionSelectedStateForCity] = useState('');

    function loadUf() {
        setListUf(statesJson);
    }

    function loadCity() {
        let selectedState = document.getElementById("select-states");
        setOptionSelectedStateForCity(selectedState.options[selectedState.selectedIndex])
        setListCity(citiesJson);
    }
    useEffect(() => {
        loadUf();
    }, [])

    useEffect(() => {
        loadCity();
    }, []) 

    return (
        <>
            <Container>
                <Selects>
                    <select name="" value={uf} onClick={loadCity} onChange={e => setUf(e.target.value)} id="select-states">
                        {listUf.map((s) => (
                            <option value={s.id_estado}>{s.estado_abrev}</option>
                        ))}
                    </select>

                   {/* <select name="" value={city} onChange={e => setCity(e.target.value)} id="select-city">
                                {listCity.map((m) => (
                            m.id_estado === 11 ? <option value={m.id_munic}>{m.nomemun}</option> : ""
                        ))
                        }    
                    </select>*/}

                    <button onClick={loadCity}>Carregar cidades</button>
                </Selects>
                <Maps />

            </Container>
        </>
    )
}