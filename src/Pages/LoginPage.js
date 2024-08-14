import React, { useState } from 'react';
import './LoginPage.css'; 
import Image from './image.png';
import Logo from './assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9001/login', {
        email: formData.email,
        password: formData.password
      });

      if (response.status === 200) {
        setMessage("Login successful");
        navigate('/Homee');
      } else {
        setMessage("Login failed");
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
  
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="login-container">

      <div className="image-sectionlog">
        <img src={Image} alt="" />
      </div>

      <div className="form-sectionlog">

        <div className="image-sectionLog2">
          <img src={Logo} alt="" />
        </div>

        <h1 className='logh1'>Welcome back bookiee!</h1>
        <h2 className='logh2'>Please enter your details</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} className='formlog'>
          <div className="form-grouplog">
            <label htmlFor="username">email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grouplog">
            <label htmlFor="password">Password:</label>
            <div className="password-containerr">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span className="password-togglee" onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </span>
            </div>
          </div>
          <div className='loginbut'>
          <button type="submit" className='buttonlog'>Login</button>
          <h4>Don't have an account? <a href='/Signup'>Signup</a></h4> 
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
