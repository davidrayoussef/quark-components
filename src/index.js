import React from 'react';
import { render } from 'react-dom';
import App from './documentation/App';
import { HashRouter } from 'react-router-dom';
import './style.css';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
