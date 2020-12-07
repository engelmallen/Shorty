import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
   <Router> <App path="/stories" /> </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


