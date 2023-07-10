import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #0f0c29;
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29); 
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);

    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  border-style, input, textarea, button, div {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
