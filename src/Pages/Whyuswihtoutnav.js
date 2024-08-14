import React from 'react';
import './Why_us.css'; // Add your styles in this CSS file
import whybbb from './assets/whybbb.jpg';
import whybb from './assets/whybb.jpg';
import { Link } from 'react-router-dom';



const Whyuswithoutnav = () => {
  return (
    <div>
    <div className='whyyss'>
    <div className="image-sectionwhy1">  {/* =====> logo*/}
    <img src={whybbb} alt="" />
    </div>
    
    <div className="about-us-container">
    <div className='whypart1'>
      <h1>Why Us?</h1>
      <p>
        Welcome to [Your Website Name], your go-to platform for buying and selling second-hand books and handwritten notes at affordable prices. Our mission is to make quality reading materials accessible to everyone while providing a marketplace for sellers to reach new audiences.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        At [Your Website Name], we believe that books and handwritten notes should be shared and enjoyed by all. We strive to create a community where people can find great deals on pre-loved books and notes, negotiate prices with sellers, and contribute to a more sustainable and literate world.
      </p>
      </div>
      <div className="image-sectionwhy2">  {/* =====> logo*/}
      <img src={whybb} alt="" />
      </div>
      <div className='whypart2'>
      <h2>How It Works</h2>
      <p>
        Sellers list their books and notes on our platform, setting their own prices. Buyers can browse listings, negotiate prices, and purchase items directly from the sellers. We provide a user-friendly interface and secure transactions to ensure a smooth experience for both buyers and sellers.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li><strong>Affordable Prices:</strong> Get great deals on pre-loved books and notes.</li>
        <li><strong>Negotiable Prices:</strong> Engage with sellers to negotiate and get the best price.</li>
        <li><strong>Sustainable Choices:</strong> Contribute to reducing waste by buying second-hand.</li>
        <li><strong>Community Driven:</strong> Connect with fellow book lovers and sellers in your area.</li>
      </ul>
      </div>
      <br></br>
     <Link to="/Contactuswithoutnav"><button>Contact Us</button></Link> 
      </div>
      </div>
      </div>
    );
  };
  
  export default Whyuswithoutnav;
  