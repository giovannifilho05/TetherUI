import styled from 'styled-components'

import { ReactComponent as CurrencyIcon } from '../../assets/img/currency.svg'

export const Container = styled.footer`
    width: 100%;
    height: 20vh;
    background: #EEF0E8;
    position: relative;
    display: flex;
    padding: 0 60px;
    color: #15202C;

    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    div {
        height: 100%;
        margin: 10px 0;
    }

    div + div {
        margin-left: 20px;
    }

    @media(max-width: 900px ){
        flex-direction: column;
        height: auto;
        
        div + div {
            margin-left: 0px;
        }
    }
`

export const Title = styled.h2`
    margin-bottom: 5px;
    font-weight: 300;

    @media(max-width: 1260px) {
        font-size: 1rem;
    }
`

export const Description = styled.span`
    font-size: 0.9rem;

    @media(max-width: 1000px) {
        font-size: 0.8rem;
    }
`

export const StyledCurrencyIcon = styled(CurrencyIcon)`
    position: absolute;
    height: 60px;
    width: 60px;
    top: -35px;
    animation: loading 15s linear infinite;


    @media(max-width: 900px) {
        top: -20px;
        width: 45px;
        height: 45px;
    }
`