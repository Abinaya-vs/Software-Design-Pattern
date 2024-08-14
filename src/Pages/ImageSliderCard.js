import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardComponent.css'; // Import the CSS file

const CardPage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/LoginPage');
  };

  // Dummy values for the cards
  const cardData = [
    {
      title: 'Card 1',
     
      image: 'https://i.pinimg.com/564x/d0/a5/bd/d0a5bdc0c9c5b3b091d66bcf7cc2de0f.jpg',
    },
    {
      title: 'Card 2',
   
      image: 'https://i.pinimg.com/564x/05/9d/71/059d71d45ae31ffceb5b4e986799d22f.jpg',
    },
    {
      title: 'Card 3',
     
      image: 'https://i.pinimg.com/564x/e6/11/0e/e6110e5cd51737ab661991e35ff02d7c.jpg',
    },
    {
      title: 'Card 4',
     
      image: 'https://i.pinimg.com/564x/1a/a2/58/1aa258ed677e62388d7e8e1784d7dbb3.jpg',
    },
  ];

  return (
    <div className="cardddcontainer">
      {cardData.map((card, index) => (
        <div key={index} className="card" onClick={handleCardClick}>
          <img src={card.image} alt={card.title} className="image-placeholder" />
          <h3 className="title">{card.title}</h3>
          <p className="description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardPage;
