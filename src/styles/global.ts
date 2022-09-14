import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../assets/fundo.png';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['gray-900']};
}
body {
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;

  background-color: ${({ theme }) => theme.colors['gray-900']};
  color: #fff;
}
body, input, button, textarea {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

button {
  cursor: pointer;
  border: 0;
}
`;
