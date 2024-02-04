import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    :root {
        --black: rgba(0,0,0,1);
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer {
        width: 100%;
        min-height: 70px;
        box-shadow: 0 0 2px var(--black);
    }

    main {
        flex-grow: 1;
    }
`;

