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

    [name-city]:hover:after {
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