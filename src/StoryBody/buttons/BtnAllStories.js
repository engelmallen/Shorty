import React, {useState} from "react";
 
const BtnAllStories = (props) =>{
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button className="BtnAllStories btn-dark text-center" onClick={()=>props.allstories()}>
      {props.btnName}
      </button>
    </div>
  );
};

export default BtnAllStories