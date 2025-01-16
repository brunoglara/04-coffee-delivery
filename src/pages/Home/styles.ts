import styled from "styled-components";
import { fontsStyles } from "../../styles/themes/fonts";

export const HomeContainer = styled.div`
    padding-bottom: 9.75rem;
`;

export const Intro = styled.section`
	display: flex;
	align-items: space-between;
	justify-content: center;
	gap: 3.5rem;

	padding: 5.75rem 0;

    > img {
        max-width: 34rem;
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
		flex-direction: column; /* Altera para layout vertical */
		align-items: center; /* Centraliza os itens */
		text-align: center; /* Opcional: centraliza o texto */
		gap: 2rem; /* Ajusta o espaçamento entre os itens */
	}
`;

export const IntroContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h1 {
		${fontsStyles.fonts.titleXL}
		color: ${(props) => props.theme.baseTitle};
	}
	span {
		${fontsStyles.fonts.textL}
		color: ${(props) => props.theme.baseSubtitle};
	}
`;

export const Itens = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 1.25rem;

	margin-top: 4.125rem;

	${fontsStyles.fonts.textM}

	div {
		display: flex;
		align-items: center;
		gap: 0.75rem;

		svg {
			padding: 0.5rem;
			border-radius: 50%;
		}
	}
`;

export const CoffeeList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;

	h2 {
		${fontsStyles.fonts.titleL}
		color: ${(props) => props.theme.baseSubtitle};
	}

	> div {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 2rem;
		grid-row-gap: 2.5rem;

		@media (max-width: 1200px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 480px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;
