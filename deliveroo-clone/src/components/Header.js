import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <img src="Images/Deliveroo-logo.png" className="deliveroo-logo"></img>
      </div>
      <nav className="nav">
        <button className="header-button">Partner With Us</button>
        <button className="header-button">Sign Up or Log in</button>
        <button className="header-button">Account</button>
      </nav>
    </header>
  );
}

export default Header;
