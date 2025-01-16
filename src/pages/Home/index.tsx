import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeList, Heading, HomeContainer, Intro, IntroContent, Itens } from "./styles";

import CoffeeImg from "../../assets/coffee-main-image.svg";
import { useTheme } from "styled-components";
import { CoffeeCard } from "../../components/CoffeeCard";

export const Home = () => {
	const theme = useTheme();

	return (
		<HomeContainer>
			<Intro>
				<IntroContent>
					<Heading>
						<h1>Find the perfect coffee for any time of the day</h1>
						<span>
							With Coffee Delivery we deliver the best coffee for
							you wherever you are and at any time.
						</span>
					</Heading>
					<Itens>
						<div>
							<ShoppingCart
								size={32}
								weight="fill"
								color={theme.background}
								style={{ backgroundColor: theme.yellowDark }}
							/>
							<span>Simple and secure purchase</span>
						</div>
						<div>
							<Package
								size={32}
								weight="fill"
								color={theme.background}
								style={{ backgroundColor: theme.baseText }}
							/>
							<span> Package keep your coffee safe</span>
						</div>
						<div>
							<Timer
								size={32}
								weight="fill"
								color={theme.background}
								style={{ backgroundColor: theme.yellow }}
							/>
							<span>Fast and tracked delivery</span>
						</div>
						<div>
							<Coffee
								size={32}
								weight="fill"
								color={theme.background}
								style={{ backgroundColor: theme.purple }}
							/>
							<span>The coffee arrives fresh</span>
						</div>
					</Itens>
				</IntroContent>
				<img src={CoffeeImg} alt="Coffee main image" />
			</Intro>

			<CoffeeList>
				<h2>Our Coffees</h2>

				<div>
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
				</div>
			</CoffeeList>
			
		</HomeContainer>
	);
};
