import React from 'react';
import ReactDOM from 'react-dom';
import Home from './templates/Home';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.querySelector('#root')
);
