import {
  AddressAndPaymentContainer,
  AddressContainer,
  Description,
  DescriptionPrice,
  FinishOrderButton,
  MainContainer,
  OrderDetails,
  OrderDetailsContainer,
  OrderValues,
  PaymentContainer,
  PaymentMethodRadioButton,
  PaymentMethodRadioLabel,
  PaymentMethodsContainer,
  Price,
} from './style'

import { CartItems } from './components/CartItems'
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

export function Cart() {
  return (
    <MainContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <Description>
            <MapPinLine size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Description>
        </AddressContainer>
        <PaymentContainer>
          <Description>
            <CurrencyDollarSimple size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Description>
          <PaymentMethodsContainer>
            <PaymentMethodRadioButton
              id="radioCreditCard"
              name="paymentMethod"
              value="CreditCard"
            />
            <PaymentMethodRadioLabel htmlFor="radioCreditCard">
              <span>
                <CreditCard size={16} />
              </span>
              Cartão de crédito
            </PaymentMethodRadioLabel>
            <PaymentMethodRadioButton
              id="radioDebitCard"
              name="paymentMethod"
              value="DebitCard"
            />
            <PaymentMethodRadioLabel htmlFor="radioDebitCard">
              <span>
                <Bank size={16} />
              </span>
              Cartão de débito
            </PaymentMethodRadioLabel>
            <PaymentMethodRadioButton
              id="radioMoney"
              name="paymentMethod"
              value="Money"
            />
            <PaymentMethodRadioLabel htmlFor="radioMoney">
              <span>
                <Money size={16} />
              </span>
              Dinheiro
            </PaymentMethodRadioLabel>
          </PaymentMethodsContainer>
        </PaymentContainer>
      </AddressAndPaymentContainer>
      <OrderDetailsContainer>
        <h2>Cafés Selecionados</h2>
        <OrderDetails>
          <CartItems />
          <OrderValues>
            <DescriptionPrice>
              <p>Total de itens</p>
              <p>Entrega</p>
              <span>Total</span>
            </DescriptionPrice>
            <Price>
              <p>R$ 29,70</p>
              <p>R$ 3,50</p>
              <span>R$ 33,20</span>
            </Price>
          </OrderValues>
          <FinishOrderButton type="submit">Confirmar Pedido</FinishOrderButton>
        </OrderDetails>
      </OrderDetailsContainer>
    </MainContainer>
  )
}
