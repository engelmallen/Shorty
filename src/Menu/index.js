import React from "react"
import { Link } from "@reach/router";

const Menu = () =>{
return(
	<menu>
		<Link to="/about"> About Us Page </Link>
		<div> Most Voted </div>
		<div> Genres </div>
	</menu>)
}

export default Menu