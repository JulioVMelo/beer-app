import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import GlobalStyle from './assets/styles/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
