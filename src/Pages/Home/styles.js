import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    svg{
        max-height: 90vh;
        background-color: #bbb;
    }

    svg g path{
        color: yellow;
    }
`;

export const Selects = styled.div`
    display: flex;
`;