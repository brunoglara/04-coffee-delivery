import styled from "styled-components";
import { fontsStyles } from "../../../styles/themes/fonts";

export const ListCardContainer = styled.div`
	display: flex;
    align-items: flex-start;
    justify-content: space-between;

    border-bottom: 1px solid ${(props) => props.theme.baseButton};

    padding: 2rem 0;
	img {
		margin-right: 1.25rem;
	}

    >div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    >span {
        white-space: nowrap;
        ${fontsStyles.fonts.textM}
        font-weight: bold;
    }
`;

export const CoffeeImage = styled.img`
	max-width: 4rem;
	max-height: 4rem;
`;

export const CoffeeInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

    margin-right: 3.125rem;

    >div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.25rem;
    }

    h3 {
        ${fontsStyles.fonts.textM} 
    }

	section {
		display: flex;
		align-items: center;
		gap: 0.6rem;
	}
`;

export const ButtonRemove = styled.button`
	display: flex;
	align-items: center;
    justify-content: center;
	padding: 0.6rem;

    ${fontsStyles.fonts.buttonM}
    color: ${props => props.theme.baseText};
    text-transform: uppercase;

	background-color: ${(props) => props.theme.baseButton};
    border: 1px solid ${(props) => props.theme.baseButton};
    border-radius: 6px;
    gap: 0.25rem;

    transition: all 0.2s;

    cursor: pointer;

    svg{
        color: ${props => props.theme.purple};
    }

    &:hover {
        background-color: ${(props) => props.theme.baseHover};
        border: 1px solid ${(props) => props.theme.baseHover};
    }
`;
