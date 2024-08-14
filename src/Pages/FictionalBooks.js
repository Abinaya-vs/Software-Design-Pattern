import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FictionalBooks.css';


const FictionalBooks = () => {
  const navigate = useNavigate();
  const cards = [
    [
      {
        image: "	https://i.pinimg.com/564x/e6/11/0e/e6110e5cd51737ab661991e35ff02d7c.jpg",
        title: "Ugly Love",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      },
      {
        image: "https://i.pinimg.com/564x/e6/11/0e/e6110e5cd51737ab661991e35ff02d7c.jpg",
        title: "Ugly Love",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      }
    ],
    [
      {
        image: "https://i.pinimg.com/564x/1a/a2/58/1aa258ed677e62388d7e8e1784d7dbb3.jpg",
        title: "The Wdding People ",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      },
      {
        image: "	https://i.pinimg.com/564x/1a/a2/58/1aa258ed677e62388d7e8e1784d7dbb3.jpg",
        title: "The Wdding People  ",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      }
    ],
    [
      {
        image: "	https://i.pinimg.com/564x/d0/a5/bd/d0a5bdc0c9c5b3b091d66bcf7cc2de0f.jpg",
        title: "The WarSaw Orphan",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      },
      {
        image: "	https://i.pinimg.com/564x/d0/a5/bd/d0a5bdc0c9c5b3b091d66bcf7cc2de0f.jpg",
        title: "The WarSaw Orphan",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      }
    ],
    [
      {
        image: "https://i.pinimg.com/564x/05/9d/71/059d71d45ae31ffceb5b4e986799d22f.jpg",
        title: "The WarSaw Orphan",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      },
      {
        image: "https://i.pinimg.com/564x/05/9d/71/059d71d45ae31ffceb5b4e986799d22f.jpg",
        title: "The WarSaw Orphan",
        author: "Kelly Rimmer",
        price: "₹1100",
        discount: "40%",
      }
    ]
  ];

  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const intervals = cards.map((_, cardIndex) =>
      setInterval(() => {
        setCurrentIndexes((prevIndexes) => {
          const newIndexes = [...prevIndexes];
          newIndexes[cardIndex] = (newIndexes[cardIndex] + 1) % cards[cardIndex].length;
          return newIndexes;
        });
      }, 2000)
    );

    return () => intervals.forEach(clearInterval);
  }, [cards]);

  const handleImageClick = (book) => {
    navigate('/book', { state: { book } });
  };

  return (
    <div className="fictional-books">
    <h2 className='cardh2'>Famous Books </h2>
    <div className="cards-container">
        {cards.map((images, cardIndex) => (
          <div key={cardIndex} className="card">
            <img
              src={images[currentIndexes[cardIndex]].image}
              alt={`Card ${cardIndex + 1} Image ${currentIndexes[cardIndex] + 1}`}
              onClick={() => handleImageClick(images[currentIndexes[cardIndex]])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FictionalBooks;
