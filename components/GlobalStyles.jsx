import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {

    } 

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
 