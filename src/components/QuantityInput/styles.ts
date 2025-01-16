import styled from "styled-components";
import { fontsStyles } from "../../styles/themes/fonts";

export const QuantityInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius: 6px;

    ${fontsStyles.fonts.textM}
    color: ${props => props.theme.baseTitle};

    padding: 0.6rem;

    background-color: ${props => props.theme.baseButton};

    button {
        border-color: transparent;
        background-color: transparent;
        color: ${props => props.theme.purple};

        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: all 0.2s;

        &:hover {
            color: ${props => props.theme.purpleDark};
        }
    }
`;