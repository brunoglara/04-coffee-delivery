import styled from "styled-components";

interface ContainerProps {
	width?: string;
}

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Container = styled.label<ContainerProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	border-radius: 6px;
	border: 1px solid ${(props) => props.theme.baseButton};

	background-color: ${(props) => props.theme.baseInput};

	&:has(input:focus) {
		border-color: ${(props) => props.theme.yellowDark};
	}

	input {
		color: ${(props) => props.theme.baseText};
		width: 100%;
		background-color: transparent;
		border: none;
		padding: 12px;
		outline: none;

		&:focus::placeholder {
			color: transparent; /* Torna o placeholder invisível quando o campo está em foco */
		}

		&::placeholder {
			color: ${(props) => props.theme.baseLabel};
		}
	}
`;
