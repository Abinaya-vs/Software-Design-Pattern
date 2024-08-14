import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Checkout.css';
import Tick from './cod.png';
import GPayImage from './gpay.jpg';  
import Navbar2 from "../Components/Navbar2";

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Payment Method:', paymentMethod);
  };

  const closeModal = () => {
    setShowModal(false);
    setPaymentMethod('');
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = typeof item.price === 'string' ? parseInt(item.price.slice(1)) : item.price;
    return total + item.quantity * price;
  }, 0);

  const deliveryCharge = 50;

  return (
    <div>
    <Navbar2/>
    <div className="checkout-container">
    <div className='ioo'>
    <h2>Checkout</h2>


      <div className="checkout-cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-cart-item">
            <img src={item.image} alt={item.title} className="checkout-cart-item-image" />
            <div className="checkout-cart-item-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
              </div>
          </div>
        ))}
      </div>
</div>

<div className='iooo'>
<div className="checkout-grid">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="checkout-form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="checkout-form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              />
          </div>
          <div className="checkout-form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              />
          </div>
          <div className="checkout-form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              />
          </div>
          <div className="checkout-form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              />
          </div>
          <div className="checkout-form-group">
            <label htmlFor="zip">Zip Code:</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              />
          </div>
          </form>
        <div className="checkout-payment-method">
          <div className="payyyy">
            <h3>Payment Method</h3>
            <div className="payment-form-group">
            <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                value="cashOnDelivery"
                onChange={() => handlePaymentChange('cashOnDelivery')}
                />
              <label htmlFor="cashOnDelivery">Cash on Delivery</label>
            </div>
            <div className="payment-form-group">
            <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                onChange={() => handlePaymentChange('creditCard')}
                />
              <label htmlFor="creditCard">Credit Card</label>
            </div>
            <div className="payment-form-group">
              <input
                type="radio"
                id="debitCard"
                name="paymentMethod"
                value="debitCard"
                onChange={() => handlePaymentChange('debitCard')}
              />
              <label htmlFor="debitCard">Debit Card</label>
            </div>
            <div className="payment-form-group">
            <input
                type="radio"
                id="gpay"
                name="paymentMethod"
                value="gpay"
                onChange={() => handlePaymentChange('gpay')}
                />
              <label htmlFor="gpay">GPay</label>
            </div>
            </div>
          <div className="total-container">
            <div className="total-box">
            <p>Sub total</p>
            <p>₹{totalAmount}</p>
            </div>
            
            <div className="total-box">
              <p>Delivery Charge</p>
              <p>₹{deliveryCharge}</p>
            </div>
            <br></br>
            <div className="total-box">
              <p>Total </p>
              <p>  <br></br>₹{totalAmount + deliveryCharge}</p>
              </div>
              </div>
              </div>
              </div>
              </div>
              
              
              
              {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {paymentMethod === 'cashOnDelivery' && (
              <div className="modal-body">
              <img src={Tick} alt="Tick" />
              <h3>Order Placed Successfully!</h3>
                <p>Your order will be delivered soon. Thank you for shopping with us!</p>
                <button type="button" className="checkout-button">Track Order</button>
                </div>
                )}
            {paymentMethod === 'creditCard' && (
              <div className="modal-body">
              <h3>Credit Card Details</h3>
              <form className='formmm'>
                  <div className="form-group">
                    <label htmlFor="creditCardNumber">Credit Card Number:</label>
                    <input type="text" id="creditCardNumber" name="creditCardNumber" required />
                    </div>
                  <div className="form-group">
                    <label htmlFor="creditCardExpiry">Expiry Date:</label>
                    <input type="text" id="creditCardExpiry" name="creditCardExpiry" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="creditCardCVV">CVV:</label>
                    <input type="text" id="creditCardCVV" name="creditCardCVV" required />
                    </div>
                 <Link to="/Invoice"> <button type="submit" className="checkout-button">Pay Now</button></Link>
                </form>
              </div>
              )}
            {paymentMethod === 'debitCard' && (
              <div className="modal-body">
              <h3>Debit Card Details</h3>
                <form className='formmm'>
                  <div className="form-group">
                    <label htmlFor="debitCardNumber">Debit Card Number:</label>
                    <input type="text" id="debitCardNumber" name="debitCardNumber" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="debitCardExpiry">Expiry Date:</label>
                    <input type="text" id="debitCardExpiry" name="debitCardExpiry" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="debitCardCVV">CVV:</label>
                    <input type="text" id="debitCardCVV" name="debitCardCVV" required />
                  </div>
                  <Link to="/Invoice"> <button type="submit" className="checkout-button">Pay Now</button></Link>
                </form>
                </div>
            )}
            {paymentMethod === 'gpay' && (
              <div className="modal-body">
                <img src={GPayImage} alt="GPay" />
                <h3>Order Placed Successfully!</h3>
                <p>Your payment through GPay has been processed. Thank you for shopping with us!</p>
                </div>
                )}
                </div>
                </div>
                )}
                
                
                </div>
                
                
                
                </div>
              );
            };

export default Checkout;
