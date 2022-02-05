import React from 'react';
import './navbar.css';

function Navbar() {
  return <div className="navbar">
  <div className="left-navbar">
      <div>Muhammad Fachrul Rivaldy</div>
  </div>
  <div className="right-navbar">
      <div className="navbar-text">Home</div>
      <div className="navbar-text">About Me</div>
      <div className="navbar-text">Projects</div>
      <div className="navbar-text">Contact</div>
      <div className="resume-text">Resume</div>
  </div>
</div>;
}

export default Navbar;
