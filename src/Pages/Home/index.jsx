import React, { useEffect, useState } from 'react'
import { Container} from './styles';
import citiesJson from "../../assets/cities.json";
import Maps from '../../Components/Maps/maps';

export default function Home() {
    const [city, setCity] = useState('');
    const [listCity, setListCity] = useState([]);
    const [optionSelectedStateForCity, setOptionSelectedStateForCity] = useState('');

    function loadCity() {
        let selectedState = document.getElementById("select-states");
        setOptionSelectedStateForCity(selectedState.options[selectedState.selectedIndex])
        setListCity(citiesJson);
    }

    useEffect(() => {
        loadCity();
    }, [])

    return (
        <>
            <Container>
                {/* <select name="" value={city} onChange={e => setCity(e.target.value)} id="select-city">
                                {listCity.map((m) => (
                            m.id_estado === 11 ? <option value={m.id_munic}>{m.nomemun}</option> : ""
                        ))
                        }    
                    </select>*/}

                {/*  <button onClick={loadCity}>Carregar cidades</button>*/}
                <Maps />

            </Container>
        </>
    )
}