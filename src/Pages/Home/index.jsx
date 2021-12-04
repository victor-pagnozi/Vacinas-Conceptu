import React, { useEffect, useState } from 'react'
import axios from 'axios';
import parse from 'html-react-parser';
import { Container, Selects } from './styles';
import citiesJson from "../../assets/cities.json";
import statesJson from "../../assets/states.json";

export default function Home() {

    const [cirt, setCity] = useState([]);
    const [listCity] = useState(citiesJson);
    const [listStates] = useState(statesJson);
    const [maps, setMaps] = useState([null]);

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


    useEffect(() => {
        const idMaps = 11;
        const getMaps = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/estados/" + idMaps + "?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio");
                setMaps(parse(res.data.split("?>")[1]));
            } catch (err) {
                console.log(err)
            }
        }
        getMaps();
    }, []);

    const listCities = async (e) => {
        e.preventDefault();
        var selectedState = document.getElementById("select-states");
        var optionSelectedState = selectedState.options[selectedState.selectedIndex].value;
        console.log(optionSelectedState)
    }

    return (
        <>
            <Container>
                <Selects>
                    <select name="" id="select-states" onClick={listCities}>
                        {listStates.map((s) => (
                            <option value={s.id_estado}>{s.estado_abrev}</option>
                        ))}
                    </select>

                    <select name="" id="select-city">
                        {listCity.map((m) => (
                            
                            m.id_estado === 17?
                                <option value={m.nomemun}>{m.nomemun}</option> : ""
                        ))
                        }
                    </select>
                    {console.log(document.getElementById("select-states").options[document.getElementById("select-states").selectedIndex].value )}
                </Selects>

                {maps}
            </Container>
        </>
    )
}
