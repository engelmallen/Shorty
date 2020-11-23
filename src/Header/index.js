import React from "react";
import "./Header.css";
import Menu from ".././Menu";
import BtnAboutUs from "./BtnAboutUs";


const Header = () => {
  return (
    <div className="Header text-center mb-2">
      <BtnAboutUs />
      <div className="Logo"> </div>
      <Menu />
    </div>
  );
};
export default Header;