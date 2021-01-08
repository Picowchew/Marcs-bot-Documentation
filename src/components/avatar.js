import React from "react";
import { Link } from "react-router-dom";
import "../styles/avatar.css";
import avatar from "../images/avatar.png";

function Avatar() {
  return (
    <Link to="/">
      <img className="avatar" src={avatar} alt="Marcs-bot's Avatar" />
    </Link>
  );
}

export default Avatar;
