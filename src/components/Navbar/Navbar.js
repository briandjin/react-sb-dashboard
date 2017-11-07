import React from 'react';
import logo from '../../images/logo-coates.png';
import './Navbar.css';

const Navbar = () => (
	<nav className="nav">
	  <div className="logo-container">
	    <img src={logo} className="logo" alt="logo" />
	  </div>
	</nav>
)

export default Navbar;