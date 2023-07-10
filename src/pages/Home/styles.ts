import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
  background: linear-gradient(to right, #4a00e0, #8e2de2);

  &:not(:disabled):hover {
    background: #8e2de2;
    background: -webkit-linear-gradient(to right, #4a00e0, #8e2de2);
    background: linear-gradient(to right, #4a00e0, #8e2de2);
    opacity: 0.9;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: #c33764;
  background: -webkit-linear-gradient(to right, #1d2671, #c33764);
  background: linear-gradient(to right, #1d2671, #c33764);

  &:not(:disabled):hover {
    background: #c33764;
    background: -webkit-linear-gradient(to right, #1d2671, #c33764);
    background: linear-gradient(to right, #1d2671, #c33764);
    opacity: 0.9;
  }
`
