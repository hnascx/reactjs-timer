import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['blue-300']};
  filter: blur(0.02rem);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
`
