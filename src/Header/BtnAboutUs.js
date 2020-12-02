import React, { useState } from "react";
import ModalAboutUs from "./ModalAboutUs";
import BtnClose from "./BtnClose";


const BtnAboutUs = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className=" BtnAboutUs text-center" onClick={() => setOpen(true)}>
        <h2> About Us </h2>
      </div>
      {open && <ModalAboutUs changeState={()=> setOpen(false)}/>}
    </div>
  );
};
export default BtnAboutUs;