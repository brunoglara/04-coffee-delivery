import { Trash } from "phosphor-react";
import CoffeeImg from "../../../assets/Coffee/Expresso.svg";
import { QuantityInput } from "../../../components/QuantityInput";
import {
	ButtonRemove,
	CoffeeImage,
	CoffeeInfo,
	ListCardContainer,
} from "./styles";

export const ListCard = () => {
	return (
		<ListCardContainer>
			<div>
				<CoffeeImage src={CoffeeImg} alt="Traditional Expresso" />
				<CoffeeInfo>
					<div>
						<h3>Traditional Expresso</h3>
						<section>
							<QuantityInput />

							<ButtonRemove>
								<Trash size={16} />
								<span>Remove</span>
							</ButtonRemove>
						</section>
					</div>
				</CoffeeInfo>

			</div>
			<span>$ 9.90</span>
		</ListCardContainer>
	);
};
