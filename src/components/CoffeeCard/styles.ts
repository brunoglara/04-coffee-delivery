import styled from "styled-components";
import { fontsStyles } from "../../styles/themes/fonts";

export const CoffeeCardContainer = styled.div`
	display: flex;
	flex-direction: column;
    text-align: center;
    border-radius: 6px 36px;

    padding: 0 1.5rem 1.5rem 1.5rem;

    width: 16rem;

    background-color: ${props => props.theme.baseCard};

    h3 {
        margin-top: 1rem;
        ${fontsStyles.fonts.titleS}
        color: ${props => props.theme.baseSubtitle};
    }
`;

export const CoffeeImage = styled.img`
    margin-top: -1.25rem;
    max-width: 7.5rem;
    max-height: 7.5rem;
    align-self: center;
`

export const Tags = styled.div`
    margin-top: 0.75rem;

	display: flex;
	align-items: center;
	align-self: center;
	gap: 0.5rem;

	span {
		background-color: ${(props) => props.theme.yellowLight};
		padding: 0.25rem 0.5rem;
		border-radius: 100px;

		color: ${(props) => props.theme.yellowDark};
        text-transform: uppercase;
		${fontsStyles.fonts.tag}
        
	}
`;

export const Description = styled.span`
    margin-top: 0.5rem;
    color: ${props => props.theme.baseLabel};
    ${fontsStyles.fonts.textS}
`

export const Buy = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

    margin-top: 2rem;
    
`;

export const Price = styled.div`
	display: flex;
	align-items: baseline;
    gap: 0.25rem;

	span:first-child {
		${fontsStyles.fonts.textS}
		color: ${(props) => props.theme.baseText};
	}

	span:last-child {
		${fontsStyles.fonts.titleM}
		color: ${(props) => props.theme.baseText};
	}
`;
export const Order = styled.div`
	display: flex;
	align-items: center;
    gap: 0.5rem;

	> button {
		display: flex;
        flex: 1;
		align-items: center;
		padding: 0.5rem;
        border: none;
		border-radius: 6px;

		cursor: pointer;

		background-color: ${(props) => props.theme.purpleDark};
		color: ${(props) => props.theme.baseCard};

        transition: all 0.2s;

        &:hover {
            background-color: ${(props) => props.theme.purple};
        }
	}
`;


