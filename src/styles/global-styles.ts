import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;500&family=Lato:wght@300;700&family=Poppins:wght@300;500&display=swap');
  
  :root {
    --blue: #3786ff;
  }

  html,
  body {
    font-family: 'Lato', sans-serif;
    color: #333333;
  }

  body {
    overflow-x: hidden;
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
    color: #333333;
    text-decoration: none;
  }
`;
