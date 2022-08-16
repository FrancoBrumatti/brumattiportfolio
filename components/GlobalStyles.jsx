import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #331886;
        --secondary: #4a22c2;
        --darker: #80283e;
        --textcolor: #271946;
        --background: #8974ff;
        --textcolorSpan: #382564;
        --navbar: rgba(16, 16, 128, 0.85);
        --navbarDarker: rgba(0, 0, 112, 0.92);
        --black: #000000;
        --white: #e0e2f3;
        --fontprimary: 'Roboto', sans-serif;
        --fontsecondary: 'Barlow', sans-serif;
    } 

    body {
        background-color: var(--background);
        font-family: var(--fontprimary);
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
    a, input, button, textarea, select {
        font: inherit;
    }
`;
 