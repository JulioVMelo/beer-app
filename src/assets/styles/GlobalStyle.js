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

  .container {
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    flex-wrap: wrap;
    position: relative; 
    
    .titleApp {
      color: #f7df4b;
      text-transform: uppercase;
      font-size: 3.2rem;
      text-align: center;
      margin-bottom: 70px;
    }

    @media(max-width: 600px) {
      padding: 10px 0;
    }
  }
`;

export default GlobalStyle;
