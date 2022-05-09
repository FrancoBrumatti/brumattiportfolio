import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --primary: #4527a0;
        --secondary: #3D2645;
        --darker: #80283e;
        --brighter: #7953d2;
        --background: #1e193b;
        --appBackground: #FBEAFF;
        --navbar: rgba(0, 0, 112, 0.85);
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
 