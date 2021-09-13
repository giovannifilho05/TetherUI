import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: radial-gradient(farthest-corner at 40px 40px, rgba(16,65,64,1) 0%, rgba(21,25,41,1) 100%);
    
    @media(max-width: 900px) {
        overflow-y: auto;
        justify-content: space-between;
    }
`
export const Main = styled.main`
    margin: 100px 0px 20px 0px;
    padding: 0 60px;
    flex:1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px) {
        margin-top: 10px;
        flex: none;
    }
`

export const Presentation = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media(max-width: 1000px) {
        width: 100%;
        height: auto;
    }
`

export const Text = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PrimaryText = styled.span`
    display: inline-block;
    font-size: 4rem;
    margin-bottom: 30px;

    @media(max-width: 1260px) {
        font-size: 3rem;
    }

    @media(max-width: 400px) {
        font-size: 2rem;
    }
    
`

export const SecondaryText = styled(PrimaryText)`
    font-size: 1rem;
`

export const Buttons = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    
    @media(max-width: 500px) {
        flex-direction: column;
        align-items: center
    }
`

export const Button = styled.button`
    padding: 20px 25px;
    width: 47%;
    font-size: 1.05rem;
    color: 	hsl(0, 0%, 95%);
    letter-spacing: 1px;
    border: 1px solid ${({ primary }) => primary ? '#05D99A' : 'white'};
    background: ${({ primary }) => primary ? '#05D99A' : 'transparent'};
    transition: box-shadow 0.5s ease;

    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 41px -2px #000;
        color: 	hsl(0, 0%, 100%);
    }

    & + button {
        margin-left: 6%;
    }

    @media(max-width: 500px) {
        width: 100%;
        padding: 15px 20px;

        & + button {
            margin-top: 5px;
            margin-left: 0px;
        }
    }
`

export const Graph = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 1000px){
        display:none;
    }

    img {
        width: 70%;
    }
`