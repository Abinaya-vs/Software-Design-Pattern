import React from 'react';
import './Dashboard.css';
import { FaWallet, FaUsers, FaGlobe, FaShoppingCart, FaBell, FaServer, FaCreditCard, FaBox, FaFileInvoice, FaTable, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const projects = [
    { icon: <FaBox />, name: 'Chakra Vision UI Version', members: ['user1', 'user2', 'user3'], budget: '$14,000', completion: '60%' },
    { icon: <FaFileInvoice />, name: 'Add Progress Track', members: ['user4'], budget: '$3,000', completion: '10%' },
    { icon: <FaServer />, name: 'Fix Platform Errors', members: ['user5', 'user6'], budget: 'Not set', completion: '100%' },
    { icon: <FaShoppingCart />, name: 'Launch our Mobile App', members: ['user7', 'user8', 'user9'], budget: '$20,500', completion: '100%' },
    { icon: <FaCreditCard />, name: 'Add the New Pricing Page', members: ['user10'], budget: '$500', completion: '25%' },
    { icon: <FaBox />, name: 'Redesign New Online Shop', members: ['user11', 'user12'], budget: '$2,000', completion: '40%' },
  ];

  const orders = [
    { icon: <FaBell />, description: '$2400, Design changes', date: '22 DEC 7:20 PM' },
    { icon: <FaCreditCard />, description: 'New order #1832412', date: '21 DEC 11 PM' },
    { icon: <FaServer />, description: 'Server payments for April', date: '21 DEC 9:34 PM' },
    { icon: <FaCreditCard />, description: 'New card added for order #4395133', date: '20 DEC 2:20 AM' },
    { icon: <FaBox />, description: 'New card added for order #4395133', date: '18 DEC 4:54 AM' },
    { icon: <FaFileInvoice />, description: 'New order #9583120', date: '17 DEC' },
  ];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <ul>
        <li><Link to="/admin">Dashboard</Link></li><br></br>
        <li><Link to="/OrdersPage"> Orders Table</Link></li><br></br>
        <li><Link to="/UserManagementPage">User Management</Link></li><br></br>
        <li><Link to="/AdminPage">User Feedback </Link></li><br></br>
       
        </ul>
      </div>
      <div className="dashboard-main-content">
        <div className="dashboard-header">
          <div className="dashboard-title">Dashboard</div>
        
        </div>
        <div className="dashboard-content">
          <div className="dashboard-overview">
            <div className="overview-card">
              <FaWallet />
              <div>
                <h3>Today's Money</h3>
                <p>$53,000 <span>+55%</span></p>
              </div>
            </div>
            <div className="overview-card">
              <FaUsers />
              <div>
                <h3>Today's Users</h3>
                <p>2,300 <span>+3%</span></p>
              </div>
            </div>
            <div className="overview-card">
              <FaGlobe />
              <div>
                <h3>New Clients</h3>
                <p>+3,462 <span>-2%</span></p>
              </div>
            </div>
            <div className="overview-card">
              <FaShoppingCart />
              <div>
                <h3>Total Sales</h3>
                <p>$103,430 <span>+5%</span></p>
              </div>
            </div>
          </div>
          <div className="dashboard-main">
            <div className="welcome-card">
              <h2>Welcome back, Mark Johnson</h2>
              <p>Glad to see you again! Ask me anything.</p>
            </div>
            <div className="stats-card">
              <h3>Satisfaction Rate</h3>
              <p>95% <span>Based on likes</span></p>
            </div>
            <div className="referral-card">
              <h3>Referral Tracking</h3>
              <p>Invited 145 people</p>
              <p>Bonus 1,465</p>
              <p>Safety Score 9.3</p>
            </div>
          </div>
          <div className="projects-orders-section">
            <div className="projects-section">
              <h3>Projects</h3>
              <p>30 done this month</p>
              <div className="project-list">
                {projects.map((project, index) => (
                  <div className="project-item" key={index}>
                    <div className="project-company">
                      {project.icon}
                      <span>{project.name}</span>
                    </div>
                    <div className="project-details">
                      <div className="project-members">
                        {project.members.map((member, i) => (
                          <img src={`https://randomuser.me/api/portraits/thumb/men/${i + 1}.jpg`} alt={`member ${i}`} key={i} />
                        ))}
                      </div>
                      <div className="project-budget">{project.budget}</div>
                      <div className="project-completion">
                        <div className="completion-bar" style={{ width: project.completion }}></div>
                        <span>{project.completion}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="orders-section">
              <h3>Orders Overview</h3>
              <p>+30% this month</p>
              <div className="order-list">
                {orders.map((order, index) => (
                  <div className="order-item" key={index}>
                    {order.icon}
                    <div className="order-details">
                      <p>{order.description}</p>
                      <span>{order.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
