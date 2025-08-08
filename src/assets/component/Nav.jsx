// src/assets/component/nav.jsx
import React from "react";
import "./nav.css"; // Optional for styling

const Nav = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="/image/logo.png" alt="" />
      <h1>SkyEye Build Monitor</h1>
      <button className="Signin-button"> Sign In </button>
    </nav>
  );
};

export default Nav;
