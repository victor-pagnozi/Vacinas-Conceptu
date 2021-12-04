import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {

    const [municipio, setMunicipio] = useState([]);
    const [maps, setMaps] = useState([null]);

    useEffect(() => {
        const idMunicipio = 1100130;
        const getMunicipio = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/municipios/" + idMunicipio + "/metadados");
                setMunicipio(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        getMunicipio();
    }, []);


    useEffect(() => {
        const idMaps = 1100130;
        const getMaps = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/estados/43?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio");
                setMaps(res.data.split("?>")[1]);
            } catch (err) {
                console.log(err)
            }
        }
        getMaps();
    }, []);



    return (
        <>
            
            {console.log(maps)}
        </>
    )
}
