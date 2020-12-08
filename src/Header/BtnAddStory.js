import React, { useState } from "react";
import ModalAboutUs from "./ModalAboutUs";
import BtnClose from "./BtnClose";


const BtnAddStory = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className=" BtnAboutUs text-center" onClick={() => setOpen(true)}>
        <button className="btn-dark my-3"> New Story </button>
      </div>
      {open && <ModalAboutUs changeState={()=> setOpen(false)}/>}
    </div>
  );
};
export default BtnAddStory;