import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        cursor: default;
    }

    html, body, #root {
        height: 100%;
        font-size: 16px;
    }

    body {
        margin: 0;
        color: white;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight: 400;
        overflow-y: hidden;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
` 

export default GlobalStyle