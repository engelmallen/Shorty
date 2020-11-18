import React from "react"

const ModalAboutUs = () =>{
	let modalStyles={
		zIndex: '1000',
		border: '3px',
		marginLeft: '40%'
	}

	return (
		<div className="p-5 ModalAboutUs position-absolute bg-white mt-5 border border-dark w-25 text-center" style={modalStyles}>
			<div>
			<h1>We are stories</h1>
				<h4> 
					Velit cupidatat nulla minim quis in minim commodo sit proident labore id mollit cillum minim aliqua excepteur ut elit cupidatat irure exercitation irure ex excepteur in esse culpa occaecat ad labore labore amet cupidatat exercitation sint deserunt laborum.
				</h4>
			</div>
		</div>
		)
}

export default ModalAboutUs