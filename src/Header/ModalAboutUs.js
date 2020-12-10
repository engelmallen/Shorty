import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";


const ModalAboutUs = (props) =>{
	let usetData = {
	id: 1,
    userName: "HPLovecraft",
    userFirstName: "Howard Phillips",
    userLastName: "Lovecraft"
	}

	let modalStyles={
		zIndex: '1000',
		border: '3px',
		marginLeft: '40%'
	}

	const { register, handleSubmit } = useForm();

	const onSubmit = (formData) =>{
		fetch("http://localhost:3000/stories/", {
			method:"POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		})

	}










	return (
		
		<div className="px-5 pb-5 pt-2 ModalAboutUs position-absolute rounded bg-white mt-5 border border-dark w-25 text-center row" style={modalStyles}>
			<div>
			<input onClick={()=>props.changeState()} value="X" type="button" className ="float-right btn-danger text-light text-center w-25 px-1 col-1 onCLick={() => setClose(true)}">
			</input>
			<h1 className="col-10">We are stories</h1>
				<h4> 
					Velit cupidatat nulla minim quis in minim commodo sit proident labore id mollit cillum minim aliqua excepteur ut elit cupidatat irure exercitation irure ex excepteur in esse culpa occaecat ad labore labore amet cupidatat exercitation sint deserunt laborum.
				</h4>

			<form onSubmit={handleSubmit(onSubmit)} className="p-3 mb-2 row text-left">
				<label htmlFor="" className="col-4 pl-0">Story Name:</label>
				<input name="name" ref={register} className="col-8 pl-0"/>
				<label htmlFor="" className="col-4 pl-0">Genre:</label>
				<input name="genre" ref={register} className="col-8 pl-0"/>
				<label htmlFor="" className="col-4 pl-0">Image:</label>
				<input name="storyImage" ref={register} placeHolder="image url..." className="col-8 pl-0"/>
				<label htmlFor="" className="col-12 pl-0">Tell your Story:</label>
				<textarea name="text" ref={register} placeHolder="stats here..." className="col-12 pl-0"/>
				<button type="submit" className="btn-secondary col-12 pl-0">Create</button>

				<input name="userId" ref={register} value={usetData.id} type="hidden"/>
				<input name="rating" ref={register} value={0} type="hidden"/>
				<input name="type" ref={register} value={"story"} type="hidden"/>


			</form>

			</div>
		</div>
		)
}

export default ModalAboutUs