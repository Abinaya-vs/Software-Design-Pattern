import React from 'react';
import { Link } from 'react-router-dom';
import { FaTable, FaCreditCard, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './OrdersPage.css';

const OrdersPage = () => {
  // Dummy data
  const orders = [
    {
      orderId: 1,
      sellerId: 101,
      sellerAddress: '123 Seller St, Booktown',
      buyerId: 202,
      buyerAddress: '456 Buyer Ave, Readsville',
      bookImage: 'https://m.media-amazon.com/images/I/71E8VNPC1dL._SY466_.jpg',
      bookName: 'The Great Gatsby',
      bookPrice: 15.99,
      dateOfDelivery: '2024-08-20'
    },
    {
      orderId: 2,
      sellerId: 102,
      sellerAddress: '789 Seller Blvd, Novel City',
      buyerId: 203,
      buyerAddress: '101 Buyer Lane, Literature City',
      bookImage: 'https://i.thriftbooks.com/api/imagehandler/m/7A5EBC93CD875C071C84E782229A772EEB207882.jpeg',
      bookName: 'To Kill a Mockingbird',
      bookPrice: 12.49,
      dateOfDelivery: '2024-08-22'
    },
    {
      orderId: 3,
      sellerId: 103,
      sellerAddress: '321 Seller Rd, Fictionville',
      buyerId: 204,
      buyerAddress: '654 Buyer Dr, Storyland',
      bookImage: 'https://i.thriftbooks.com/api/imagehandler/m/8E288A555DFAFF24D06AC1EB89808EEFB0BFDBFE.jpeg',
      bookName: '1984',
      bookPrice: 17.00,
      dateOfDelivery: '2024-08-25'
    }
  ];

  return (
    <div className="orders-page">
      <div className="sidebar">
        <ul>
        <li><Link to="/admin">Dashboard</Link></li><br></br>
        <li><Link to="/OrdersPage"> Orders Table</Link></li><br></br>
        <li><Link to="/UserManagementPage">User Management</Link></li><br></br>
        <li><Link to="/AdminPage">User Feedback </Link></li><br></br>
     
        </ul>
      </div>
      <div className="content">
        <h1 className="title">Order List</h1>
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Seller ID</th>
                <th>Seller Address</th>
                <th>Buyer ID</th>
                <th>Buyer Address</th>
                <th>Book Image</th>
                <th>Book Name</th>
                <th>Book Price</th>
                <th>Date of Delivery</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.sellerId}</td>
                  <td>{order.sellerAddress}</td>
                  <td>{order.buyerId}</td>
                  <td>{order.buyerAddress}</td>
                  <td>
                    <img src={order.bookImage} alt={order.bookName} className="book-imagee" />
                  </td>
                  <td>{order.bookName}</td>
                  <td>${order.bookPrice.toFixed(2)}</td>
                  <td>{new Date(order.dateOfDelivery).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
