import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  body {
  font-family: 'Noto Sans KR', sans-serif;
  background: linear-gradient(#b4520b, #ffc301);
}
`;

export default GlobalStyle;
