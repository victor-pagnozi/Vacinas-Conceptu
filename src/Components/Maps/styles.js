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