import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Money,
} from "phosphor-react";
import {
	AddressContainer,
	AddressContent,
	AddressHeader,
	CheckoutContainer,
	CompleteOrder,
	PaymentMethodContainer,
	PaymentMethodContent,
	PaymentMethodHeader,
	SelectedCoffees,
	ListCoffees,
	TotalItens,
	SelectedCoffeesContainer,
	CheckoutButton,
} from "./styles";
import { TextInput } from "./TextInput";
import { MethodPaymentRadio } from "./MethodPaymentRadio";
import { useState } from "react";
import { ListCard } from "./ListCard";

export const Checkout = () => {
	const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

	function handleMethodSelect(method: string) {
		console.log(method);
		setSelectedMethod(method);
	}

	return (
		<CheckoutContainer>
			<CompleteOrder>
				<h2>Complete your order</h2>
				<AddressContainer>
					<AddressHeader>
						<MapPinLine size={22} />
						<div>
							<span>Delivery address</span>
							<span>
								Enter the address where you want to receive your
								order
							</span>
						</div>
					</AddressHeader>
					<AddressContent>
						<TextInput
							placeholder="Zip code"
							type="number"
							containerProps={{ style: { gridArea: "cep" } }}
						/>
						<TextInput
							placeholder="Street"
							type="text"
							containerProps={{ style: { gridArea: "street" } }}
						/>

						<TextInput
							placeholder="Number"
							type="number"
							containerProps={{ style: { gridArea: "number" } }}
						/>
						<TextInput
							placeholder="Complement"
							type="text"
							containerProps={{
								style: { gridArea: "complement" },
							}}
						/>

						<TextInput
							placeholder="Neighborhood"
							type="text"
							containerProps={{
								style: { gridArea: "neighborhood" },
							}}
						/>
						<TextInput
							placeholder="City"
							type="text"
							containerProps={{ style: { gridArea: "city" } }}
						/>
						<TextInput
							placeholder="ST"
							type="text"
							containerProps={{ style: { gridArea: "state" } }}
						/>
					</AddressContent>
				</AddressContainer>

				<PaymentMethodContainer>
					<PaymentMethodHeader>
						<CurrencyDollar size={22} />
						<div>
							<span>Payment</span>
							<span>
								The payment is made on delivery. Select the
								payment method
							</span>
						</div>
					</PaymentMethodHeader>
					<PaymentMethodContent>
						<MethodPaymentRadio
							textMethod="Credit Card"
							isSelected={
								selectedMethod === "credit-card" ? true : false
							}
							onClick={() => handleMethodSelect("credit-card")}
						>
							<CreditCard size={16} />
						</MethodPaymentRadio>

						<MethodPaymentRadio
							textMethod="Debit Card"
							isSelected={
								selectedMethod === "debit-card" ? true : false
							}
							onClick={() => handleMethodSelect("debit-card")}
						>
							<Bank size={16} />
						</MethodPaymentRadio>

						<MethodPaymentRadio
							textMethod="Cash"
							isSelected={
								selectedMethod === "cash" ? true : false
							}
							onClick={() => handleMethodSelect("cash")}
						>
							<Money size={16} />
						</MethodPaymentRadio>
					</PaymentMethodContent>
				</PaymentMethodContainer>
			</CompleteOrder>
			<SelectedCoffees>
				<h2>Selected Coffees</h2>
				<SelectedCoffeesContainer>
					<ListCoffees>
						<ListCard />
						<ListCard />
						<ListCard />
					</ListCoffees>

					<TotalItens>
						<div>
							<span>Total of items</span>
							<span>$ 29.70</span>
						</div>

						<div>
							<span>Delivery fee</span>
							<span>$ 3.50</span>
						</div>

						<div>
							<span>Total</span>
							<span>$ 33.20</span>
						</div>
					</TotalItens>
					
					<CheckoutButton type="submit">
						Confirm order
					</CheckoutButton>
				</SelectedCoffeesContainer>
			</SelectedCoffees>
		</CheckoutContainer>
	);
};
