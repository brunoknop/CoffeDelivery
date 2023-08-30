import { Trash } from '@phosphor-icons/react'
import { Coffees } from '../../Coffee'
import {
  AddressAndPaymentContainer,
  AddressContainer,
  Description,
  Handlers,
  ItemContent,
  MainContainer,
  NameAndPrice,
  OrderDetails,
  OrderDetailsContainer,
  OrderItem,
  OrderValues,
  PaymentContainer,
} from './style'

export function Cart() {
  return (
    <MainContainer>
      <AddressAndPaymentContainer>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <Description></Description>
        </AddressContainer>
        <PaymentContainer>
          <Description></Description>
        </PaymentContainer>
      </AddressAndPaymentContainer>
      <OrderDetailsContainer>
        <h2>Cafés Selecionados</h2>
        <OrderDetails>
          {Coffees.map((coffee) => {
            if (
              coffee.id === '34db4331-eb67-4c94-8e62-706f22b75a1a' ||
              coffee.id === 'eb2d3e51-1ac0-4c1d-8fef-a2578f782cd7'
            )
              return (
                <OrderItem>
                  <img src={coffee.img} alt="" />
                  <ItemContent>
                    <NameAndPrice>
                      <p>{coffee.type}</p>
                      <span>R$ {coffee.price}0</span>
                    </NameAndPrice>
                    <Handlers>
                      <input type="number" />
                      <button>
                        <span>
                          <Trash size={16} />
                        </span>
                        REMOVER
                      </button>
                    </Handlers>
                  </ItemContent>
                </OrderItem>
              )
            else return null
          })}
          <OrderValues></OrderValues>
        </OrderDetails>
      </OrderDetailsContainer>
    </MainContainer>
  )
}
