// src/components/ContactUs.js
import Logo from './assets/logo2.png';
import React, { useState } from 'react';
import './Contact_us.css';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';
import Navbar2 from '../Components/Navbar2';

const Contactuswithoutnav = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:9001/cont', formData)
      .then(response => {
        alert('Your message has been sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          description: ''
        });
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('There was an error sending your message.');
      });
  };

  return (
    <div>
<Navbar2/>
    <div className="contact-us">
    <div className="contact-form-container">
        <div className="left-side">

        <div className="branding">
            <img src={Logo} alt="logo" />
            <p>Tether supports and empowers growing ventures and innovation as a digital token built on multiple blockchains.</p>
          </div>
        
          </div>
          <div className="right-side">
          <h2>GET IN TOUCH</h2>
          <p>24/7 We will answer your questions and problems</p>
          <form className='cont' onSubmit={handleSubmit}>
            <div className="input-group">
              
              <input 
                type="text" 
                name="firstname"
                placeholder="First Name" 
                value={formData.firstname} 
                onChange={handleChange} 
                />
            </div>
            
            <div className="input-group">
              
              <input 
                type="text" 
                name="lastname"
                placeholder="Last Name" 
                value={formData.lastname} 
                onChange={handleChange} 
                />
            </div>
            <div className="input-group">
            
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="input-group">
          
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone" 
                value={formData.phone} 
                onChange={handleChange} 
                />
            </div>
            <div className="input-group">
              <textarea 
              name="description"
              placeholder="Describe your issue" 
                value={formData.description} 
                onChange={handleChange}
              ></textarea>
              </div>
            <button type="submit" className='contbut'>
              Send
            </button>
          </form>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Contactuswithoutnav;
