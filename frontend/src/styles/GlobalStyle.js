import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        
        font-family: 'Nanum Gothic Coding', monospace;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    video {
        padding: 0;
        margin: -1px 0;
    }

    body::-webkit-scrollbar {
        width: 14px;
        background-color: #eee;
        
        display: none;
    }

    body::-webkit-scrollbar-track {
        background-color: transparent;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 10px;
        background-clip: padding-box;
        border: 3px solid transparent;
    }

    body::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }

    button {
        border: 0;
        background-color: inherit;
        cursor: pointer;
    }

    li {
        list-style: none;
    }
`

export default GlobalStyle;