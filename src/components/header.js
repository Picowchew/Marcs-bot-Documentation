import React from "react";
import "../styles/header.css";
import Avatar from "./avatar";
import Name from "./name";
import NavBar from "./navbar";

function Header() {
  return (
    <div className="header-bg">
      <div className="left">
        <Avatar />
        <Name />
      </div>
      <div className="right">
        <NavBar />
      </div>
      <div className="clear" />
      <hr />
    </div>
  );
}

export default Header;
