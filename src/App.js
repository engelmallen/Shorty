import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import StoryBody from "./StoryBody";




const App = () => {
  return (
  	<div className="App" >
  		<Header/>
  		<StoryBody className="row" />
   	</div>
  );
}

export default App;