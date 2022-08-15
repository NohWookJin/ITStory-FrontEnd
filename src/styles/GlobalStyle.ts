import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body {
        font-family: "D2";
    }
    @font-face {
        font-family: "HANNA";
        src: url("../fonts/BMHANNAPro.ttf");
    }
    @font-face {
        font-family: "D2";
        src: url("../fonts/D2Coding-Ver1.3.2-20180524-all.ttc");
    }
`;
