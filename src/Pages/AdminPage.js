// src/components/AdminPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPage.css';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9001/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the contacts!', error);
      });
  }, []);

  const handleStatusChange = (id, newStatus) => {
    axios.put(`http://localhost:9001/contacts/${id}`, { status: newStatus })
      .then(response => {
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, status: newStatus } : contact
        ));
      })
      .catch(error => {
        console.error('There was an error updating the status!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:9001/contacts/${id}`)
      .then(() => {
        setContacts(contacts.filter(contact => contact.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the contact!', error);
      });
  };

  return (
    <div className="admin-page-container">
      <div className="sidebar">
        <ul>
        <li><Link to="/admin">Dashboard</Link></li><br></br>
        <li><Link to="/OrdersPage"> Orders Table</Link></li><br></br>
        <li><Link to="/UserManagementPage">User Management</Link></li><br></br>
        <li><Link to="/AdminPage">User Feedback </Link></li><br></br>
        </ul>
      </div>
      <div className="admin-page-content">
        <h1>Contact Us Submissions</h1>
        <div className="contacts-table-container">
          <table className="contacts-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Description</th>
                <th>Status</th>
                <th>Update Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.firstname}</td>
                  <td>{contact.lastname}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.description}</td>
                  <td>{contact.status}</td>
                  <td>
                    <select
                      value={contact.status}
                      onChange={(e) => handleStatusChange(contact.id, e.target.value)}
                    >
                      <option value="new">New</option>
                      <option value="pending">Pending</option>
                      <option value="solved">Solved</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(contact.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
