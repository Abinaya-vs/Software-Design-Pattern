import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cartIcon from './cart-icon.png';

function Navbar() {
  return (
    <nav className="navbar">
    <div className='main-container'>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/LoginPage">Login/Signup</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/Why_us">Why Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact_us">Contact us</Link>
      </li>
    </ul>
  </div>
    </nav>
  );
}

export default Navbar;
