import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { Container, Heading, Info, InfoContent, Order } from "./styles"
import { useTheme } from 'styled-components'

import Illustration from '../../assets//Illustration.svg'

export const Success = () => {
    const theme = useTheme();

    return (
        <Container>
          <Order>
            <Heading>
              <h2>Yup! Your order has been confirmed</h2>
              <span>Now, just wait a little, and your coffee will soon arrive.</span>
            </Heading>
    
            <Info>
              <InfoContent>
                <div>
                  <MapPin
                    color={theme.white}
                    style={{ backgroundColor: theme.purple }}
                    size={32}
                  />
    
                  <div>
                    <span>
                      Delivery at{' '}
                      <strong>
                        New street, 25
                      </strong>
                    </span>
    
                    <span>
                      neighborhood - city, State
                    </span>
                  </div>
                </div>
    
                <div>
                  <Timer
                    color={theme.white}
                    style={{ backgroundColor: theme.yellow }}
                    size={32}
                  />
    
                  <div>
                    <span>Delivery Estimate</span>
    
                    <strong>20 min - 30 min</strong>
                  </div>
                </div>
    
                <div>
                  <CurrencyDollar
                    color={theme.white}
                    style={{ backgroundColor: theme.yellowDark }}
                    size={32}
                  />
    
                  <div>
                    <span>Payment on delivery</span>
    
                    <strong>Credit Card</strong>
                  </div>
                </div>
              </InfoContent>
            </Info>
          </Order>
    
          <img src={Illustration} alt="Order illustration" />
        </Container>
      )
}