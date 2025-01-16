import {createGlobalStyle} from 'styled-components'

export const GlobalStyleComponent = createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    :focus {
        outline: none;
        
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.background};
        color: ${props => props.theme.baseText};
    }


`