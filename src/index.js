import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router";
import './index.css';
import App from './App';
import About from "./About"
import Story from "./Story"

ReactDOM.render(
  <React.StrictMode>
  	<Router>
   		<App path="/" /> 
   		<About path="/about" /> 
   		<Story path="/stories/:storyId"/>
	</Router>
  </React.StrictMode>,
  document.getElementById('root')
);


