import styled from 'styled-components';

export const ContainerMaps = styled.div`
    
    svg{
        max-height: 80vh;
        background-color: #C6DDFD;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const Selects = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    p{
        text-transform: uppercase;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;