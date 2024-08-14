import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddToCart.css';
import Navbar2 from "../Components/Navbar2";
const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleAddItem = (newItem) => {
    const existingItem = cartItems.find(item => item.id === newItem.id);
    if (existingItem) {
      alert('This book is already in the cart.');
    } else {
      const updatedCart = [...cartItems, { ...newItem, quantity: 1 }];
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = typeof item.price === 'string' ? parseInt(item.price.slice(1)) : item.price;
    return total + item.quantity * price;
  }, 0);

  const handleAddBooksClick = () => {
    navigate('/Category');
  };

  const handleCheckoutClick = () => {
    navigate('/Checkout', { state: { cartItems } });
  };

  return (
    <div><Navbar2/>
    <div className="cart-container">
      <div className="cart-left">
        <h1 className="cart-title">MY BAG</h1>
        <p>Items are reserved for 60 minutes</p>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button onClick={handleAddBooksClick} className="add-books-button">
              Add Books
            </button>
          </div>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="cart-item-controls">
                    <select value={item.color} onChange={(e) => {}}>
                      <option value="pale_blue">Delivery options</option>
                      <option value="pale_blue">Courier</option>
                      <option value="pale_blue">Walk and get</option>
                    </select>
                    <select value={item.size} onChange={(e) => {}}>
                      <option value="W28in">Package Type</option>
                      <option value="W28in">Packed</option>
                      <option value="W28in">Un-Packed</option>
                    </select>
                    <select value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}>
                      <option value="1"> 1</option>
                      <option value="2"> 2</option>
                      <option value="3"> 3</option>
                    </select>
                  </div>
                  <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                </div>
                <div className="cart-item-price">{item.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="cart-right">
        <div className="cart-summary">
          <h2>Total</h2>
          <div className="cart-summary-details">
            <p>Sub-total</p>
            <p>₹{totalAmount}</p>
          </div>
          <div className="cart-summary-details">
            <p>Delivery</p>
            <select>
              <option value="standard">Standard Delivery (₹50)</option>
            </select>
          </div>
          <div className="cart-total">
            <h2>₹{totalAmount + 50}</h2>
            <button onClick={handleCheckoutClick} className="checkout-button">CHECKOUT</button>
          </div>
        </div>
        <div className="payment-methods">
          <p>WE ACCEPT:</p>
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="Mastercard" />
          <img src="paypal.png" alt="PayPal" />
        </div>
        <div className="discount-code">
          <p>Got a discount code? Add it in the next step.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddToCart;
