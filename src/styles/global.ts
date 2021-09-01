import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    background-color: #23292E;
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    }

    button {
    outline: 0;
    width: 5rem;
    height: 2rem;
    margin: 0.5rem 0;
    cursor: pointer;
    }

    button:hover {
    border: 0.1rem #FFF solid;
    }
`