import React from "react";
import { Link } from "@reach/router";
import "./Header.css";
import Menu from ".././Menu";
import BtnAboutUs from "./BtnAboutUs";
import BtnAddStory from "./BtnAddStory"


const Header = () => {
  return (
    <div className="Header text-center mb-2">
{/*      <BtnAboutUs />*/}
      <BtnAddStory/>
    </div>
  );
};
export default Header;