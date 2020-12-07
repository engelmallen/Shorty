import React from "react"

const StoryModal = (props) =>{
	let modalStyles={
		zIndex: '1000',
		border: '3px',
		marginLeft: '40%'
	}

	return (
		
		<div className="px-5 pb-5 pt-2 position-absolute bg-white mt-5 border border-dark w-25 text-center row" style={modalStyles}>
			<div>
			<input onClick={()=>props.changeState()} value="X" type="button" className ="float-right btn-danger text-light text-center w-25 px-1 col-1">
			</input>
			<h1 className="col-10">{props.name}</h1>
			<h2 >{props.author}</h2>
				<h4> 
					{props.text}	
				</h4>
			</div>
		</div>
		)
}

export default StoryModal