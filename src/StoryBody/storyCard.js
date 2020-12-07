import React, { useState } from "react";
import "./index.css";
import StoryStars from "./StoryStars";

let StoryCard = (props) =>{

let shrink = "w-25"

let [change, setChange]=useState(false)
let curImage = props.image
	let divStyle = {
		background: 'url(' + curImage + ') black no-repeat center',
		backgroundSize:'contain',
		width: shrink,
		height: '300px',
	};

	return (
			<div className="StoryCard p-3 border rounded float-left pt-4 text-warning font-weight-bol pb-1 w-25" style={divStyle}>
			<div conClick={()=>setChange(!change)} className="h3 font-weight-bold border-bottom pb-3"> {props.name} </div>
			<div className="h4 font-weight-bold"> {props.author} </div>
			<div className="h4 font-weight-bold"> {props.genre} </div>
			<div className="h6 bg-warning rounded text-dark pb-2 px-2 pt-1 float-right">{props.text}</div>
				<div>
					</div>
					<div className="stars">
				</div>
			</div>
	)
{change ? shrink = "25%":shrink = "100%"}
	
}




export default StoryCard