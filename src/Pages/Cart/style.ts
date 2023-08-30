import { styled } from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.9375rem;
  }
`

export const AddressAndPaymentContainer = styled.div``
export const AddressContainer = styled.form``
export const PaymentContainer = styled.div``
export const Description = styled.form``

export const OrderDetailsContainer = styled.div``

export const OrderDetails = styled.div`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  + div {
    padding-top: 1.5rem;
  }

  img {
    width: 64px;
    height: 64px;
  }
`
export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`
export const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;

  span {
    color: ${(props) => props.theme['base-text']};
    text-align: right;
    font-weight: 700;
  }
`
export const Handlers = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
    width: 4.5rem;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    border: none;

    color: ${(props) => props.theme['base-title']};
    text-align: center;
    line-height: 130%;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    padding: 0rem 0.5rem;
    gap: 0.25rem;
    border: none;
    cursor: pointer;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};

    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 0;

    span {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const OrderValues = styled.div``
