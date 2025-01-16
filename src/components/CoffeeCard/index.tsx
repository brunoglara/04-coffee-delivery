import {
	Buy,
	CoffeeCardContainer,
	CoffeeImage,
	Description,
	Order,
	Price,
	Tags,
} from "./styles";
import CoffeeImg from "../../assets/Coffee/Expresso.svg"; 
import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../QuantityInput";

export const CoffeeCard = () => {
	return (
		<CoffeeCardContainer>
			<CoffeeImage src={CoffeeImg} alt="Traditional Expresso" />
			<Tags>
				<span>TRADITIONAL</span>
				<span>WITH MILK</span>
			</Tags>

			<h3>Traditional Expresso</h3>
			<Description>
				Traditional coffee made with hot water and ground beans
			</Description>

			<Buy>
				<Price>
					<span>$</span>
					<span>9.90</span>
				</Price>
				<Order>
					<QuantityInput />
					<button>
						<ShoppingCart size={22} weight="fill" />
					</button> 
				</Order>
			</Buy>
		</CoffeeCardContainer>
	);
};
