import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/PretendardVariable.woff2') format('woff2');
        font-display: swap;
        font-weight: 45 920;
    }

    * {
        font-family: 'Pretendard', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 150%;
        letter-spacing: 0.02em;
    }

    html, body,#root{
        height: 100%;
    }

    body {
        min-height: 100vh;
    }

    button {
        cursor: pointer;
        border: none;
        white-space: nowrap;
    }

    li, ul {
        list-style: none none;
    }
`;

export default GlobalStyle;
