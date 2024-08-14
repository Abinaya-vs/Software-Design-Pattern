import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cartIcon from './cart-icon.png';

function Navbar2() {
  return (
    <nav className="navbar">
    <div className='main-container'>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to="/Homee">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Category">Category</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Auction">Auction</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/AddToCart">
        My Cart
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/ProfilePage">Profile</Link>
    </li>
      
    </ul>
  </div>
    </nav>
  );
}

export default Navbar2;
