import { NavLink } from 'react-router-dom'
import logo from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer, NavCartLink, NavLocationLink } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img
          src={logo}
          alt="Ícone de um copo de café roxo na esquerda e escrito Coffee Delivery na direita"
        />
      </NavLink>
      <nav>
        <NavLocationLink to="/cart" title="Localização">
          <MapPin size={22} weight="fill" />
          <p>Porto Aletre, RS</p>
        </NavLocationLink>
        <NavCartLink to="/cart" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavCartLink>
      </nav>
    </HeaderContainer>
  )
}
