import React, { useEffect, useState } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
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

    {/*function updateMaps() {
        let selectedState = document.getElementById("select-states");
        var optionSelectedState = selectedState.options[selectedState.selectedIndex];
        if (!optionSelectedState) {
            optionSelectedState = "12";
        }
        const getMaps = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/estados/" + optionSelectedState.value + "?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio");
                setMaps(parse(res.data.split("?>")[1]));
            } catch (err) {
                console.log(err)
            }
        }
        getMaps();
    }  */}

    useEffect(() => {
        loadUf();
    }, [])

    useEffect(() => {
        loadCity();
    }, [])

   {/* useEffect(() => {
        updateMaps();
    }, [])   */}



    {/*const listCities = async (e) => {
        e.preventDefault();
        var selectedState = document.getElementById("select-states");
        var optionSelectedState = selectedState.options[selectedState.selectedIndex].value;

        console.log(listCity)
        setIdState(optionSelectedState);
    }
        useEffect(() => {
        const idMunicipio = 1100130;
        const getCity = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/municipios/" + idMunicipio + "/metadados");
                setCity(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getCity();
    }, []);
*/}
    return (
        <>
            <Container>
                <Selects>
                    <select name="" value={uf} onClick={loadCity} onChange={e => setUf(e.target.value)} id="select-states">
                        {listUf.map((s) => (
                            <option value={s.id_estado}>{s.estado_abrev}</option>
                        ))}
                    </select>

                    <select name="" value={city} onChange={e => setCity(e.target.value)} id="select-city">
                {/*        {listCity.map((m) => (
                            m.id_estado === 11 ? <option value={m.id_munic}>{m.nomemun}</option> : ""
                        ))
                        }    */}

                    </select>

                    <button onClick={loadCity}>Carregar cidades</button>

                    <button>Carregar Mapa</button>
                </Selects>

                <Maps />
            </Container>
        </>
    )
}
