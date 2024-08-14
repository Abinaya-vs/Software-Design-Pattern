// src/components/UserManagementPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './UserManagementPage.css';

const UserManagementPage = () => {
  // Dummy data
  const users = [
    {
      userName: 'JohnDoe',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
      city: 'New York',
      state: 'NY',
      pincode: '10001',
      country: 'USA',
      profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      userName: 'JaneSmith',
      email: 'jane@example.com',
      phoneNumber: '987-654-3210',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      country: 'USA',
      profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      userName: 'AliceJohnson',
      email: 'alice@example.com',
      phoneNumber: '555-123-4567',
      city: 'Chicago',
      state: 'IL',
      pincode: '60601',
      country: 'USA',
      profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];

  return (
    <div className="user-management-page-container">
      <div className="sidebar">
        <ul>
        <li><Link to="/admin">Dashboard</Link></li><br></br>
        <li><Link to="/OrdersPage"> Orders Table</Link></li><br></br>
        <li><Link to="/UserManagementPage">User Management</Link></li><br></br>
        <li><Link to="/AdminPage">User Feedback </Link></li><br></br>
        </ul>
      </div>
      <div className="content">
        <h1 className="title">User Management</h1>
        <div className="user-table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Profile Photo</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>City</th>
                <th>State</th>
                <th>Pincode</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <img src={user.profilePhoto} alt={user.userName} className="profile-photo" />
                  </td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.pincode}</td>
                  <td>{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
