import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const NavLocationLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  text-decoration: none;
  gap: 0.25rem;

  p {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    padding: 0;
  }
`

export const NavCartLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
`
