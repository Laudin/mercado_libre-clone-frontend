import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #3786ff;
  }
  html,
  body {
    height: 100%;
    width: 100%;
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

  p,
  label {
    //font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;
