import { AddressAndPayment } from "./components/AddressAndPayment";
import { CartItems } from "./components/CartItems";

export function Cart() {
  return (
    <div>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressAndPayment />
      </div>
      <div>
        <h2>Cafés Selecionados</h2>
        <CartItems />
      </div>
    </div>
  )
}
