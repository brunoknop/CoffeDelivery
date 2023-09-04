import styled from 'styled-components'

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  & + & {
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
`

export const QuantityInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
  width: auto;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  > input {
    border: none;
    background: transparent;
    width: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    text-align: center;
    line-height: 130%;
  }

  > input[type='number']::-webkit-inner-spin-button,
  > input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const DeleteItemButton = styled.button`
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
  text-transform: uppercase;

  span {
    color: ${(props) => props.theme.purple};
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    span {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
