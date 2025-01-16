import { Container } from "./styles"

interface MethodPaymentRadioProps {
    textMethod: string,
    children: JSX.Element
    isSelected: boolean
    onClick: () => void
}

export const MethodPaymentRadio = ({textMethod, children, isSelected, onClick}: MethodPaymentRadioProps) => {
    return (
        <Container dataState={isSelected} onClick={onClick}>

                <input type="radio"/>
                {children}
                <span>{textMethod}</span>

        </Container>
    )
}