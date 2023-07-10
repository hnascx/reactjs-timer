import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;
    border: 1px solid #fff;
    border-radius: 16px;
  }
`
export const Separator = styled.div`
  font-size: 10rem;
  font-weight: bold;
  padding: 2rem 0;
  color: ${(props) => props.theme.white};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
