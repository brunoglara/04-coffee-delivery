import { HTMLAttributes } from "react";
import { Box, Container } from "./styles";

interface TextInputProps {
	placeholder: string;
	type: string;
	containerProps?: HTMLAttributes<HTMLDivElement>
}

export const TextInput = (props: TextInputProps) => {
	const { placeholder, type, containerProps } = props;

	return (
		<Box {...containerProps}>
			<Container>
				<input type={type} placeholder={placeholder} />
			</Container>
		</Box>
	);
};
