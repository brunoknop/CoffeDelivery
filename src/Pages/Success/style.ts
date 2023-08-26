import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SuccessTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SuccessContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GradientBorderContainer = styled.div`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.yellow},
    ${(props) => props.theme.purple}
  );
  border-radius: 6px 36px;
  padding: 1px;
`

export const DeliveryData = styled.div`
  border-radius: 5px 35px;
  padding: 2.5rem;
  width: 32.875rem;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
`
export const DeliveryTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
`
export const PaymentMethod = styled.div`
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.background};
  border-radius: 50%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    font-weight: 700;
  }
`
