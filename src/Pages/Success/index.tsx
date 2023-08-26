import {
  AddressContainer,
  DeliveryData,
  DeliveryTime,
  GradientBorderContainer,
  InfoBox,
  PaymentMethod,
  SuccessContainer,
  SuccessContentContainer,
  SuccessTitleContainer,
  TextContainer,
} from './style'
import SuccessIlustration from '../../assets/success-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessTitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessTitleContainer>
      <SuccessContentContainer>
        <GradientBorderContainer>
          <DeliveryData>
            <InfoBox>
              <AddressContainer>
                <MapPin size={16} weight="fill" />
              </AddressContainer>
              <TextContainer>
                <p>
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </TextContainer>
            </InfoBox>
            <InfoBox>
              <DeliveryTime>
                <Timer size={16} weight="fill" />
              </DeliveryTime>
              <TextContainer>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </TextContainer>
            </InfoBox>
            <InfoBox>
              <PaymentMethod>
                <CurrencyDollar size={16} />
              </PaymentMethod>
              <TextContainer>
                <p>Pagamento na entrega</p>
                <span>Cartão de Crédito</span>
              </TextContainer>
            </InfoBox>
          </DeliveryData>
        </GradientBorderContainer>
        <img src={SuccessIlustration} alt="" />
      </SuccessContentContainer>
    </SuccessContainer>
  )
}
