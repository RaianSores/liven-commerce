import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
    :root {
    --red: #ff0000;    
    --background-principal: #F2F3F4;
    --text-grey: #42464D;
    --text-grey-mid: #565C69;
    --text-grey-weak: #7F858D;
    --white: #FFFFFF;
    --white-weak: #F5F5F5;
    --blue: #0060b1;
    --grey-trash-icon: #B6BBC2;
    --grey-line: #DEE0E4;
    --black-color: #202124;
    --green: #85FF7A;
    }
    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    * {
    box-sizing: border-box;
    }
    
`;
