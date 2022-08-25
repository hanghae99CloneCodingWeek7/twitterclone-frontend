import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
      font-family: 'BMDOHYEON';
      src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
      font-weight: normal;
      font-style: normal;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', 'Open Sans', sans-serif;
        background-color: #ffffff;
        color: #000000;
        letter-spacing : 0.02rem;
    }
    textarea {
        border: none;
        overflow: auto;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        resize: none;
    }
    /* ::-webkit-scrollbar { 
      display: none;
    } */
`;

export default GlobalStyles;
