import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyle from './assets/styles/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Home />
  </>,
  document.getElementById('root')
);
