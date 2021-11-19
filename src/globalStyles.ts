import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #ffffff;
        --background-gray: #F7F8F9;
        --white: #ffffff;
        --black: #1e1e1e;
        --gray: #777777;
        --light-gray: #cccccc;
        --lighter-gray: #eeeeee;
        --green: #09B53C; 
    }

    *,*::before,*::after {
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Noto Sans TC', 'Poppins', sans-serif;
    }

    html {
        scroll-behavior:smooth;
    }

    body,
    html,
    a {
        font-family: 'Noto Sans TC', 'Poppins', sans-serif;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);
        overflow-x: hidden;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }

    p {
        color: var(--gray);
        font-size: calc(.6rem + 0.7vw);
    }

    a {
        text-decoration: none;
        outline: none;
        color: inherit;
    }

    button {
        border:none;
        outline:none;
        &:focus {
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }

    img {
        width: 100%;
        height: auto;
    }
`;
