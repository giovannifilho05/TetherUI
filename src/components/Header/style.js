import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 900px){
        position: sticky;
        background-color: #123439;
        flex-direction: column;
        padding: 10px 40px;
    }
`

export const SemNome = styled.div`
    @media(max-width: 900px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Logo = styled.div`
    width: 130px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    font-weight: 700;
    font-size: 1.3rem;

    &:hover {
        cursor: pointer;
    }

    svg {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
`

export const Nav = styled.nav`
    width: 60%;

    @media(max-width: 900px){
        width: 100%;

        &.close {
            display: none;
        }
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        @media(max-width: 900px){
            flex-direction: column;
        }
    }

    li {
        margin: 0;    
        list-style: none;
        display: inline-block;
        color: 	hsl(0, 0%, 80%);

        @media(max-width: 900px){
            margin-top: 10px;
        }

        &:hover {
            cursor: pointer;
            color: hsl(0, 0%, 100%);
        }
    }


`
export const MenuHambuger = styled.div`
    display: none;
    
    @media(max-width: 900px){
        display: flex;
        cursor: pointer;
        justify-content: space-between;
    }
`

export const Sign = styled.div`
    @media(max-width: 900px){
        display: flex;
        flex-direction: column;

        &.close {
            display: none;
        }
    }
`

export const Button = styled.button`
  border: none;
  color: white;
  padding: 15px 20px;
  background: ${({ primary }) => primary ? 'transparent' : 'hsl(202, 31%, 17%)'};

  &:hover {
    cursor: pointer;
    background: ${({ primary }) => primary ? 'hsl(202, 31%, 50%)' : 'hsl(202, 31%, 25%)'};
  }

  & + button {
    margin-left: 5px;
  }
`