import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Bookss.css';
import downread from './assets/downread.png';
import Navbar2 from "../Components/Navbar2";

const Bookss = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === book.id);
    
    if (existingItemIndex !== -1) {
      // If the book already exists in the cart, update the quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // If the book does not exist in the cart, add it with quantity 1
      cart.push({ ...book, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/addtocart');
  };

  const handleBuyNow = () => {
    navigate('/checkout', { state: { cartItems: [{ ...book, quantity: 1 }] } });
  };

  if (!book) {
    return <div className="bookss-no-book-selected">No book selected.</div>;
  }

  return (
    <div><Navbar2/>
    <div className="bookss-details-container">
      <div className="bookss-details">

      <div className="image-sectionn">  {/* =====> logo*/}
      <img src={downread} alt="" />
    </div>
        <div className="bookss-image-container">
          <img src={book.image} alt={book.title} className="bookss-cover" />
          
        </div>
        <div className="bookss-info">
          <h1 className="bookss-title">{book.title}</h1>
          <p className="bookss-author">By: {book.author}</p>
          <div className="bookss-rating">
            <span>4.8</span> ⭐⭐⭐⭐⭐ | 9 Reviews
          </div>
          <div className="bookss-price">
            <span className="bookss-current-price">{book.price}</span>
            <span className="bookss-original-price">M.R.P. ₹1,485</span>
            <span className="bookss-discount">Save: ₹624 (42%)</span>
          </div>
          <div className="bookss-availability">In Stock</div>
          <div className="bookss-shipping">Ships within 1-2 Business Days</div>
          <div className="bookss-actions">
            <div className="bookss-quantity-selector">
              Quantity: <select><option value="1">1</option></select>
            </div>
            <button className="bookss-add-to-cart" onClick={addToCart}>Add to Cart</button>
            <button className="bookss-buy-now" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Bookss;
