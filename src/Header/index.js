import React, {useState} from "react";
import "./Header.css";
import Menu from ".././Menu";


const Header = () => {
const [wasClicked,setWasClicked] = useState(false);


	return (
			<div className="Header">
				<div className="Logo">  </div>
				<Menu/>
			</div>

		)
}

export default Header