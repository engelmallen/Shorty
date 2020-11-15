import React from "react";
import "./index.css";
import alley from "./alley.jpg";
import StoryStars from "./StoryStars"


const StoryCard = (props) =>{
	const divStyle = {

		background: 'url(' + alley + ') no-repeat center',
		backgroundSize:'contain',
		width: '400px',
		height: '300px',

	};
	return (
			<div className="storyCard d-relative p-3 pt-4 text-warning font-weight-bold" style={divStyle} >
			<div className="h3"> The Man in the Alley </div>
			<div className="h4"> Engel Mallen </div>
				<div>
				{/*<img src={alley} width="100%"/>	*/}
				</div>
				<div width="50%">
					<StoryStars/>
				</div>
				

			</div>



	)
}


export default StoryCard