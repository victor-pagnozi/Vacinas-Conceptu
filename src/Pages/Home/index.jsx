import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HTMLReactParser from 'html-react-parser';
import parse from 'html-react-parser';
import { Container } from './styles';

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
        const idMaps = 11;
        const getMaps = async () => {
            try {
                const res = await axios.get("https://servicodados.ibge.gov.br/api/v3/malhas/estados/" + idMaps + "?formato=image/svg+xml&qualidade=intermediaria&intrarregiao=municipio");
                setMaps(parse('<div>' + res.data.split("?>")[1] + '</div>'));
            } catch (err) {
                console.log(err)
            }
        }
        getMaps();
    }, []);



    return (
        <>
            <Container>
                {maps}
            </Container>
        </>
    )
}
