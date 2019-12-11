import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
  }

  img,
  object,
  embed,
  video,
  iframe {
    max-width:100%;
    height: auto;
  }

  a {
    text-decoration:none;
    color:inherit;

      &:hover {
        text-decoration: none;
    }
  }

  ul {
    list-style:none;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: #18171F;
    font-family: "Roboto", "Helvetica neue", "Lato", sans-serif;
  }
`;

export default GlobalStyle;
