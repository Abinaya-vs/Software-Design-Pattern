import React from 'react';
import './Table.css'; // Include CSS file for styling
import { FaCreditCard, FaUser, FaSignInAlt, FaUserPlus, FaTable } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Table = () => {
  const authors = [
    { name: 'Esthera Jackson', email: 'esthera@simmmple.com', function: 'Organization', status: 'EMPLOYED', action: 'Edit' },
    { name: 'Alexa', email: 'alexa@simmmple.com', function: 'Programator', status: '23/04/18', action: 'Edit' },
    { name: 'Laurent Michael', email: 'laurent@simmmple.com', function: 'Developer', status: '11/01/19', action: 'Edit' },
    { name: 'Freduardo', email: 'freduardo@simmmple.com', function: 'Projects', status: '19/09/17', action: 'Edit' },
    { name: 'Daniel Thornas', email: 'daniel@simmmple.com', function: 'Programator', status: '24/12/08', action: 'Edit' },
    { name: 'Wilson', email: 'mark@simmmple.com', function: 'Developer', status: '04/10/21', action: 'Edit' },
  ];

  const projects = [
    { name: 'Chüra Vision Ul', budget: '$14,000', status: 'Working', completion: '60%', action: 'Edit' },
    { name: 'Add Progress Track', budget: '$3,000', status: 'Working', completion: '100%', action: 'Edit' },
    { name: 'Fix Platform Errors', budget: 'Not set', status: 'Working', completion: '30%', action: 'Edit' },
    { name: 'Launch our Mobile App', budget: '$32,000', status: 'Working', completion: '0%', action: 'Edit' },
    { name: 'Add the New Pricing Page', budget: '$2,300', status: 'Working', completion: '100%', action: 'Edit' },
  ];

  return (
    <div className="page-container">
      <div className="sidebar">
        <ul>
        <li><Link to="/admin"><FaTable />Dashboard</Link></li><br></br>
          <li><Link to="/Table"><FaTable /> Tables</Link></li><br></br>
          <li><Link to= "/Profile"><FaCreditCard /> Profile</Link></li><br></br>
          <li><FaSignInAlt /> Sign In</li><br></br>
          <li><FaUserPlus /> Sign Up</li><br></br>
        </ul>
      </div>
      <div className="content">
        <div className="authors-table">
          <h2>Authors Table</h2>
          <table>
            <thead>
              <tr>
                <th>AUTHOR</th>
                <th>FUNCTION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author, index) => (
                <tr key={index}>
                  <td>{author.name}</td>
                  <td>{author.function}</td>
                  <td>{author.status}</td>
                  <td><button>{author.action}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="projects-table">
          <h2>Projects Table</h2>
          <table>
            <thead>
              <tr>
                <th>PROJECT</th>
                <th>BUDGET</th>
                <th>STATUS</th>
                <th>COMPLETION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>{project.name}</td>
                  <td>{project.budget}</td>
                  <td>{project.status}</td>
                  <td>{project.completion}</td>
                  <td><button>{project.action}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
