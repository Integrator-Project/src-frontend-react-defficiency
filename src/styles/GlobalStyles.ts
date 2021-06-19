import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: var(--primary);
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--white);
    }

    :root {
        --primary: #1E1E1E;
        --secondary: #171717;
        --tertiary: #0378A6;
        --quaternary: #03738C;
        --quinary: #06261A;
    
        --white: #fff;
        --light-gray: #6F6E6E;
        --input: #6C7581;

        --getting-worse: #C81919;
        --improving: #18C62A;
    }

`;