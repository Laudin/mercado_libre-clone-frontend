import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #3786ff;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    color: #333333;
  }

  body {
    @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;500&display=swap');
    font-family: 'Catamaran', sans-serif;
    font-size: 0.9rem;
    background: #ebebeb;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
