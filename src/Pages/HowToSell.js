import React from 'react';
import './HowToSell.css';
import { Link } from 'react-router-dom';
function HowToSell() {
  return (
    <div className="how-to-sell-books">
    <div className='heading'>
      <h2>How To <span className="highlight">Sell Used Books</span> On Our Platform</h2>
      </div>
  <div className="steps">
  <Link to='/Signup' className='qui'>
        <div className="step">
          <div className="icon-container">
            <i className="fas fa-robot icon android-icon"></i>
            <div className="step-number">01</div>
          </div>
          <h3>Simply Register</h3>
          <p>Register via our web. You can create an account socially also.</p>
        </div>
        </Link>
        <Link to='/Step1' className='qui'>
        <div className="step">
          <div className="icon-container">
            <i className="fas fa-book icon ad-icon"></i>
            <div className="step-number">02</div>
          </div>
          <h3>Post Book</h3>
          <p>Fill required details and submit the book ad you want to sell.</p>
        </div>
        </Link>
        <Link to='/Contact_us' className='qui'>
        <div className="step">
          <div className="icon-container">
            <i className="fas fa-comments icon help-icon"></i>
            <div className="step-number">03</div>
          </div>
          <h3>Need Help?</h3>
          <p>Wherever you are stuck in the process, just tap on the floating chat icon on the bottom left.</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default HowToSell;
