import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 
import Image2 from './Image2.png';
import Logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Components/Navbar";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigator=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:9001/def', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      if (response.status === 200) {
        setMessage("Registration successful");
        navigator("/LoginPage")
      } else {
        setMessage("Registration failed");
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="signup-container">

    <div className="image2-sec">
    <img src={Image2} alt=""/>
      </div>
      <div className="form-sectionsign">
  
      <div className="image-section2sign">
        <img src={Logo} alt="" />
        </div>
      <h1 className='signh1'>Join us!</h1>
        <h2 className='signh2'>Please fill in your details</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} className='signnform'>
          <div className="form-groupsignn">
          <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-groupsignn">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              />
          </div>
          <div className="form-groupsignn">
            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
              </div>
              </div>
              <div className="form-groupsignn">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <div className="password-container">
            <input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                />
              <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
            </div>
         <button type="submit" className='subsign'>Sign Up</button>
        </form>

        <div className="social-signup">
        <h4>Or sign up with</h4>

        <div className="social-buttons">
            <button className="google-btn">
              <FontAwesomeIcon icon={faGoogle} />  Google
              </button>
              <button className="facebook-btn">
              <FontAwesomeIcon icon={faFacebook} />  Facebook
              </button>
              <button className="amazon-btn">
              <FontAwesomeIcon icon={faAmazon} />  Amazon
              </button>
              </div>

              </div>
              </div>
              </div>
              </div>
            );
          };
          
          export default Signup;
          