import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5% !important; // a cada 1rem será considerado 10px
    
    @media (max-width: 1020px) {
      font-size: 56% !important;
    }
  }
  body {
    color: #000;
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;

    
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  a {
  color: inherit;
  text-decoration: none;
}
  button {
    cursor: pointer;
  }
`;