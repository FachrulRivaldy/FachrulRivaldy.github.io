import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Home from '../../home';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <div>Muhammad Fachrul Rivaldy</div>
      </div>
      <div className='right-navbar'>
        <div>
          <Link to='/' className='navbar-text'>
            Home
          </Link>
        </div>
        <div>
          <Link to='/' className='navbar-text'>
            About Me
          </Link>
        </div>
        <div>
          <Link to='/' className='navbar-text'>
            Projects
          </Link>
        </div>
        <div>
          <Link to='/' className='navbar-text'>
            Contact
          </Link>
        </div>
        <div className='resume-text'>Resume</div>
      </div>
    </div>
  );
}

export default Navbar;
