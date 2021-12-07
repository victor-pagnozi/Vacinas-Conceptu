import styled from 'styled-components';

export const ContainerCaption = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 84vh;
    margin-left: 3vw;

    .captions-colors{
        display: flex;
        min-width: 20vw;
        height: 2vh;
    }

    .captions-colors div{
        min-width: 2.3vw;
        min-height: 2vh;
        margin: 0 0.04rem;
    }

    .captions-colors div:nth-child(1){
        background-color: var(--color-zero-dez);
    }
    .captions-colors div:nth-child(2){
        background-color: var(--color-onze-vinte);
    }
    .captions-colors div:nth-child(3){
        background-color: var(--color-vinteUm-trinta);
    }
    .captions-colors div:nth-child(4){
        background-color: var(--color-trintaUm-quarenta);
    }
    .captions-colors div:nth-child(5){
        background-color: var(--color-quarentaUm-cinquenta);
    }
    .captions-colors div:nth-child(6){
        background-color: var(--color-cinquentaUm-sessenta);
    }
    .captions-colors div:nth-child(7){
        background-color: var(--color-sessentaUm-setenta);
    }
    .captions-colors div:nth-child(8){
        background-color: var(--color-setentaUm-oitenta);
    }
    .captions-colors div:nth-child(9){
        background-color: var(--color-oitentaUm-noventa);
    }
    .captions-colors div:nth-child(10){
        background-color: var(--color-noventaUm-cem);
    }

    .captions-divs{
        font-size: 0.485vw;
        text-align: center;
        display: flex;
    }

    .captions-divs div{
        min-width: 2.2vw;
        min-height: 2vh;
        margin: 0 0.04rem;
    }
`;