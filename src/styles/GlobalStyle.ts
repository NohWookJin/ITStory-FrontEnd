import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: "Nanum";
        
    }
    body {
        color: ${props => props.theme.mode.color};
	    background-color: ${props => props.theme.mode.bgColor};
        
    }
    @font-face {
    font-family: "D2";
    src: url("./fonts/D2Coding-Ver1.3.2-20180524-all.ttc");
    },
    @font-face {
    font-family: "BM";
    src: url("./fonts/BMHANNAPro.ttf");
    },
    @font-face {
    font-family: "Nanum";
    src: url("./fonts/NanumSquareR.ttf");
    }
`;
