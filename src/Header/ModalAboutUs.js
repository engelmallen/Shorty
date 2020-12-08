import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";


const ModalAboutUs = (props) =>{
	let modalStyles={
		zIndex: '1000',
		border: '3px',
		marginLeft: '40%'
	}

	const { register, handleSubmit } = useForm();










	return (
		
		<div className="px-5 pb-5 pt-2 ModalAboutUs position-absolute bg-white mt-5 border border-dark w-25 text-center row" style={modalStyles}>
			<div>
			<input onClick={()=>props.changeState()} value="X" type="button" className ="float-right btn-danger text-light text-center w-25 px-1 col-1 onCLick={() => setClose(true)}">
			</input>
			<h1 className="col-10">We are stories</h1>
				<h4> 
					Velit cupidatat nulla minim quis in minim commodo sit proident labore id mollit cillum minim aliqua excepteur ut elit cupidatat irure exercitation irure ex excepteur in esse culpa occaecat ad labore labore amet cupidatat exercitation sint deserunt laborum.
				</h4>

			<form className="p-3 mb-2">
				<label htmlFor="">Story Name:</label>
				<input name="name"/>
				<label htmlFor="">Genre</label>
				<input name="name"/>
				<label htmlFor="">Tell your Story:</label>
				<input name="name"/>
			</form>

			</div>
		</div>
		)
}

export default ModalAboutUs