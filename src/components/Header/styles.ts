import styled from "styled-components";
import { fontsStyles } from "../../styles/themes/fonts";

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 2rem 0;
`;

export const Aside = styled.aside`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;

		background-color: ${(props) => props.theme.purpleLight};

		padding: 0.5rem;
		border-radius: 8px;

		${fontsStyles.fonts.textS}

		svg {
			color: ${(props) => props.theme.purple};
		}

		span {
			color: ${(props) => props.theme.purpleDark};
		}
	}

	a {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 8px;

		background-color: ${(props) => props.theme.yellowLight};
		color: ${(props) => props.theme.yellowDark};

		position: relative;

		span {
			${fontsStyles.fonts.textS}
			color: ${(props) => props.theme.white};

			background-color: ${(props) => props.theme.yellowDark};

			border-radius: 50%;
			width: 1.25rem;
			height: 1.25rem;

			display: flex;
			align-items: center;
			justify-content: center;

			// Positioning the number of items in the cart
			position: absolute;
			top: 0;
			right: 0;
			transform: translate(50%, -50%);
		}
	}
`;
