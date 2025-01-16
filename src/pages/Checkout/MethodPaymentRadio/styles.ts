import styled from "styled-components";
import { fontsStyles } from "../../../styles/themes/fonts";

interface ContainerProps {
	dataState: boolean;
}

export const Container = styled.label<ContainerProps>`
	display: flex;
	align-items: center;

	width: 100%;
	gap: 0.75rem;
	padding: 1rem;

	border-radius: 6px;
	border: 1px solid transparent;

	background-color: ${(props) => props.theme.baseButton};

	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.2s;

	white-space: nowrap;


	${(props) =>
		props.dataState &&
		`
        border: 1px solid ${props.theme.purple};
        background-color: ${props.theme.purpleLight};
    `}

	&:hover {
		background-color: ${(props) => props.theme.baseHover};
	}

	${fontsStyles.fonts.textS}

	svg {
		color: ${(props) => props.theme.purple};
	}

	input {
		display: none;
	}
`;
