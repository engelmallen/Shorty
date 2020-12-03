import React from "react"

const BtnGenre = (props) =>{
	return (	
	<div>
			<button className=" BtnGenre btn-light w-100" onClick={()=>props.filterStories()} criteria={props.criteria}>
				{props.name}
			</button>
	</div>		
		)
}

export default BtnGenre