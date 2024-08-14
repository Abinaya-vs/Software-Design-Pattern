import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardPage.css'; // Import the CSS file

const CardPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/login');
  };

  return (
    <div className="container">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="card" onClick={handleCardClick}>
          <div className="image-placeholder"></div>
          <h3 className="title">Card {index + 1}</h3>
          <p className="description">
            This is a description for Card {index + 1}.
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardPage;
