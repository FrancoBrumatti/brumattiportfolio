import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #8b616f;
        --secondary: #91c1b4;
        --darker: #5d2c1f;
        --brighter: #f3e6ba;
        --background: #361424;
        --black: #18070f;
        --white: #f3efe0;
        --fontprimary: 'Roboto', sans-serif;
        --fontsecondary: 'Barlow', sans-serif;
    } 

    body {
        background-color: var(--background);
    }

    //css reset
    *, *::before, *::after {
    box-sizing: border-box;
    }
    * {
    margin: 0;
    }
    html, body {
    height: 100%;
    }
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
    input, button, textarea, select {
    font: inherit;
    }
`;
 