import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --displayfont: 'Permanent Marker', cursive;
        --scriptfont: 'Ubuntu', sans-serif;
        --fancyscriptfont: 'Kalam', cursive;

        --maincolor: #31cebb;
        --seccolor: #74828b;
        --lightcolor: #ffffff;
        --graycolor: #a0a6af;
        --darkcolor: #37362D;
        --bgcolor: #1e1f27;

        --brightened: brightness(120%);
    }

    * {
        box-sizing: border-box;
    }

    #root {
        position: absolute;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background-color: var(--bgcolor);
    }
`;

export default GlobalStyle;
