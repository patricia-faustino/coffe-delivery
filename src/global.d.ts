export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 130%;

    }

    :focus {
        outline: 0;
        box-shadow: 0 0 2px ${(props) => props.theme['green-500']};
    }

    body {
        background: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;