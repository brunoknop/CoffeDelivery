import { styled } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.9375rem;
  }
`

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const AddressAndPaymentContainerBase = styled.div`
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const AddressContainer = styled(AddressAndPaymentContainerBase)``

export const PaymentContainer = styled(AddressAndPaymentContainerBase)`
  margin-top: 0.75rem;
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    display: flex;
    padding: 12px;
    width: 100%;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  #cep,
  #numero,
  #bairro {
    width: 12.5rem;
    flex-shrink: 0;
  }

  #uf {
    width: 3.75rem;
    flex-shrink: 0;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;
  }
`

export const Description = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  .addressIcon {
    color: ${(props) => props.theme['yellow-dark']};
  }

  .paymentIcon {
    color: ${(props) => props.theme.purple};
  }
`

export const OrderDetailsContainer = styled.div``

export const OrderDetails = styled.div`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

const DescriptionAndPriceBase = styled.div`
  gap: 0.75rem;
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme['base-text']};
  }

  span {
    font-weight: 700;
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DescriptionPrice = styled(DescriptionAndPriceBase)`
  p {
    font-size: 0.875rem;
  }
`

export const Price = styled(DescriptionAndPriceBase)`
  text-align: right;
`

export const OrderValues = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
`

export const FinishOrderButton = styled.button`
  padding: 12px 8px;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const PaymentMethodsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.75rem;
`

export const PaymentMethodRadioButton = styled.input.attrs({
  type: 'radio',
})`
  opacity: 0;
  position: fixed;
  width: 0;
`

export const PaymentMethodRadioLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 0.75rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};

  font-size: 0.75rem;
  line-height: 160%; /* 19.2px */
  text-transform: uppercase;

  > span {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.purple};
  }

  transition: all 0.2s ease-in-out;

  ${PaymentMethodRadioButton}:checked + && {
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  ${PaymentMethodRadioButton}:hover + && {
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};
  }
`
