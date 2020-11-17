import React, {useState} from "react";
import "./Header.css";
import Menu from ".././Menu";
import StoryBody from ".././StoryBody"
import BtnAboutUs from "./BtnAboutUs"
import ModalAboutUs from "./ModalAboutUs"


const Header = () => {

const [wasClicked,setWasClicked] = useState(false);


	return (
			<div className="Header text-center mb-2">
				<BtnAboutUs onclick={() => setWasClicked(true)}/>
				<div>
					{wasClicked && 
						return(
								() => {<BtnAboutUs/>}
							)
					}
				</div>
				<div className="Logo">  </div>
				<Menu/>
			</div>

		)
}

export default Header