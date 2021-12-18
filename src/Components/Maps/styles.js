import styled from 'styled-components';

export const ContainerMaps = styled.div`
    
    svg{
        max-height: 80vh;
        background-color: #F4F8FF;
        border-radius: 4px;
        padding: 1rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    select{
        font: 300 1rem 'Poppins';
    }

    select:focus{
        outline: none;
    }

    .render-map{
        margin-top: 1rem;
    }

    .render-map div {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
    }

    .hover-maps{
        position: fixed;
        top: 0;
        left: 0;
    }

    [name-city] {
        position: relative;
        font-weight: bold;
        top: 0;
    }

    [name-city]:after {
        display: none;
        position: fixed;
        padding: 5px;
        border-radius: 3px;
        content: attr(name-city);
        background-color: #0095ff;
        color: white;
        top: 0;
        left: 0;
        right: 0;
    }

    [name-city]:hover:after{
        display: block;
        background-color: red;
    }

    .list-cities{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        right: 4vw;
        top: 10vh;
        overflow-y: scroll;
    }

    .list-cities li{
        list-style-type: none;
    }

    .list-cities li.on {
        background: aqua;
        color: black;
        font-weight: bold;
    }
    path.on {
        fill: aqua;
    }

    .on:after {
        display: none;
        position: fixed;
        padding: 5px;
        border-radius: 3px;
        content: attr(data-city);
        background-color: #0095ff;
        color: white;
        top: 0;
        left: 0;
        right: 0;
        text-align: center;
    }
    .on:hover:after{
        display: block;
    }    
`;

export const Selects = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    p{
        text-transform: uppercase;
        margin-right: 0.7rem
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;