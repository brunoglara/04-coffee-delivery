import {Aside, HeaderContainer } from "./styles";

import logoCoffee from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
export const Header = () => {
	return (
		<HeaderContainer>
			<Link to="/">
				<img src={logoCoffee} alt="Logotype coffee delivery" />
			</Link>

			<Aside>
				<div>
					<MapPin size={22} weight="fill" />
					<span>City, ST</span>
				</div>
				<Link to="checkout">
                    <ShoppingCart size={22} weight="fill" />
                    <span>3</span>    
                </Link>
			</Aside>
		</HeaderContainer>
	);
};
