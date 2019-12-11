/* eslint-disable camelcase */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="titleApp">Beer app</h2>
        <Routes />
      </div>
    </BrowserRouter>
  );
}
