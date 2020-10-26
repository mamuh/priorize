import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 15px 'Roboto', sans-serif;
    background: #ececec;
    color: #33445a;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    font: 15px 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }
`
