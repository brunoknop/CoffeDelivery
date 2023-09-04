import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Coffees } from '../../../../Coffee'
import {
  DeleteItemButton,
  Handlers,
  ItemContent,
  NameAndPrice,
  OrderItem,
  QuantityInput,
} from './style'

const SelectedCoffees = Coffees.filter((coffee) => {
  return (
    coffee.id === '34db4331-eb67-4c94-8e62-706f22b75a1a' ||
    coffee.id === 'eb2d3e51-1ac0-4c1d-8fef-a2578f782cd7'
  )
})

export function CartItems() {
  return SelectedCoffees.map((coffee) => {
    return (
      <OrderItem key={coffee.id}>
        <img src={coffee.img} alt="" />
        <ItemContent>
          <NameAndPrice>
            <p>{coffee.type}</p>
            <span>R$ {coffee.price}0</span>
          </NameAndPrice>
          <Handlers>
            <QuantityInput>
              <button>
                <Minus size={14} />
              </button>
              <input type="number" max={50} min={1} value={1} />
              <button>
                <Plus size={14} />
              </button>
            </QuantityInput>
            <DeleteItemButton>
              <span>
                <Trash size={16} />
              </span>
              Remover
            </DeleteItemButton>
          </Handlers>
        </ItemContent>
      </OrderItem>
    )
  })
}
