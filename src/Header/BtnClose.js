import React, {useState} from "react";


const BtnClose = (props) =>{


	const [close, setClose] = useState(false);
	const emptyModal = (x) =>{
		this.parent.innerHTML = "";
	}

	return (
			<input onCLick={props.onclick} value="X" type="button" className ="float-right btn-danger text-light text-center w-25 px-1 col-1 onCLick={() => setClose(true)}">
			</input>
		)
}

export default BtnClose