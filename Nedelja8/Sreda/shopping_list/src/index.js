import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shoppingItems } from './components/Data';

ReactDOM.render(
  <React.StrictMode>
    <App shoppingItems={shoppingItems} username = "Pera"/>
  </React.StrictMode>,
  document.getElementById('root')
);