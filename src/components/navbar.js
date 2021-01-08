import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="navitem">
        Home
      </Link>
      <Link to="/setup" className="navitem">
        Setup
      </Link>
      <Link to="/commands" className="navitem">
        Commands
      </Link>
    </div>
  );
}

export default NavBar;
