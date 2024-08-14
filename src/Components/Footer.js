import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyBill, faTag, faUndo, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-item">
          <FontAwesomeIcon icon={faTruck} />
          <p>Free Delivery</p>
        </div>
        <div className="footer-top-item">
          <FontAwesomeIcon icon={faMoneyBill} />
          <p>Cash on Delivery</p>
        </div>
        <div className="footer-top-item">
          <FontAwesomeIcon icon={faTag} />
          <p>Original Products</p>
        </div>
        <div className="footer-top-item">
          <FontAwesomeIcon icon={faUndo} />
          <p>Easy Replacement</p>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-main-left">
          <p>
            Ever wanted to buy a book but could not because it was too expensive? worry not! because <strong>Antiqurian</strong> is here! <strong>Antiqurian</strong>, these days in news, is being called as the Robinhood of the world of books.
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <div className="footer-links">
          <h4>Our Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Wholesale</li>
            <li>Sell with Us</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Track Order</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-support">
          <h4>Support</h4>
          <p><FontAwesomeIcon icon={faPhone} /> Call: 90501 11218</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: Antiqurian.com</p>
          <h4>Download Mobile App</h4>
          <div className="app-icons">
            <FontAwesomeIcon icon={faGooglePlay} />
            <FontAwesomeIcon icon={faApple} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Our Products: <a href="/">Antiqurian</a> <a href="/">Lock The Box</a> <a href="/">Dump</a></p>
        <p>&copy; 2024 Antiqurian, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
