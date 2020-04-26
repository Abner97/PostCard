import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import "../node_modules/jquery/dist/jquery.slim.min.js";
import "../node_modules/popper.js/dist/umd/popper.min.js";
import name from 'module';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from './Card/CardUI';


ReactDOM.render(
  <React.StrictMode>
    < Card />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
