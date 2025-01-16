import styled from "styled-components";
import { fontsStyles } from "../../styles/themes/fonts";

export const CheckoutContainer = styled.div`
	display: flex;
	gap: 2rem;
`;

export const CompleteOrder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${fontsStyles.fonts.titleXS}
	color: ${(props) => props.theme.baseSubtitle};
`;
export const AddressContainer = styled.section`
	display: flex;
	flex-direction: column;
	padding: 2.5rem 2.5rem;
	width: 100%;

	margin-top: 1rem;

	border-radius: 6px;
	background-color: ${(props) => props.theme.baseCard};
`;

export const AddressHeader = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;

	svg {
		color: ${(props) => props.theme.yellowDark};
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;

		span:first-child {
			${fontsStyles.fonts.textM}
			color: ${(props) => props.theme.baseSubtitle};
		}

		span:last-child {
			${fontsStyles.fonts.textS}
			color: ${(props) => props.theme.baseText};
		}
	}
`;

export const AddressContent = styled.div`
	display: grid;
	grid-template-areas:
		"cep . ."
		"street street street"
		"number complement complement"
		"neighborhood city state";
	grid-template-columns: 200px 1fr 60px;
	grid-gap: 16px 12px;

	margin-top: 2rem;
`;

export const PaymentMethodContainer = styled.section`
	margin-top: 0.75rem;
	display: flex;
	flex-direction: column;
	padding: 2.5rem 2.5rem;
	width: 100%;

	border-radius: 6px;
	background-color: ${(props) => props.theme.baseCard};
`;

export const PaymentMethodHeader = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;

	svg {
		color: ${(props) => props.theme.purple};
	}

	div {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;

		span:first-child {
			${fontsStyles.fonts.textM}
			color: ${(props) => props.theme.baseSubtitle};
		}

		span:last-child {
			${fontsStyles.fonts.textS}
			color: ${(props) => props.theme.baseText};
		}
	}
`;

export const PaymentMethodContent = styled.div`
	margin-top: 2rem;

	display: flex;
	justify-content: center;
	gap: 0.75rem;
`;

export const SelectedCoffees = styled.section`
	display: flex;
	flex-direction: column;
	width: 28rem;
	
	
	${fontsStyles.fonts.titleXS}
	color: ${(props) => props.theme.baseSubtitle};
	`;

export const SelectedCoffeesContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	padding: 2.5rem;

	border-radius: 6px;	
	background-color: ${(props) => props.theme.baseCard};
`

export const ListCoffees = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 1rem;


	> div:first-child {
		padding-top: 0; /* Remove o padding-top do primeiro ListCard */
	}
`;

export const TotalItens = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	margin-top: 2rem;

	gap: 0.75rem;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		span:first-child {
			${fontsStyles.fonts.textS};
		}

		span:last-child {
			${fontsStyles.fonts.textM};
		}
	}

	div:last-child {
		span{
			${fontsStyles.fonts.textL};
			font-weight: bold;
		}
	}
`;

export const CheckoutButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 0.75rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  ${fontsStyles.fonts.buttonG};
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.yellow};

  border-radius: 6px;
  
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme.yellowDark};
  }

`
