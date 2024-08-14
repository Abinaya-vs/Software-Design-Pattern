import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="dashboard">
    <div className='dashc'>
      <div className="welcome-section">
        <h1>Welcome back!</h1>
        <p>Nice to see you, Admin!</p>
      </div>

      <div className="car-information-section">
        <div className='ef'>
          <h2>Book Informations</h2>
          <p>Hello, Admin! Your Book is ready.</p>
          <div className="car-status">
            <div className="car-load">
              <div className="load-circle">
                

                </div>
              </div>
            
            </div>
          <div className='metricss1'>
              <div className="metric">
                <div className="icon battery-icon"></div>
                <p>Published year</p>
                <p>1997</p>
              </div>
              <div className="metric">
                <div className="icon efficiency-icon"></div>
                <p>Efficiency</p>
                <p>+20%</p>
              </div>
              </div>
              <div className='metricss2'>
              <div className="metric">
                <div className="icon consumption-icon"></div>
                <p>Consumption</p>
                <p>163W/km</p>
              </div>
              <div className="metric">
                <div className="icon week-icon"></div>
                <p>This Week</p>
                <p>1.342km</p>
                </div>
                </div>
          
         
        </div>
      </div>

      <div className="profile-information-section">
        <h2>Profile Information</h2>
        <p>Hi, I'm Mark Johnson. Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
        <div className="profile-details">
          <p>Full Name: <span>Mark Johnson</span></p>
          <p>Mobile: <span>(44) 123 1234 123</span></p>
          <p>Email: <span>mark@simmmple.com</span></p>
          <p>Location: <span>United States</span></p>
          <p>Social: 
            <span className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </span>
          </p>
        </div>
      </div>
</div>
<div className='dashh'>
      <div className="overview-section">
        <div className="overview-header">
          <h1>$120,420.50</h1>
          <p>Total balance from all accounts. <span className="currency">USD</span></p>
          <button className="open-account-button">Open an account or deposit</button>
        </div>
        <div className="overview-content">
          <div className="overview-item">
            <h2>Overview</h2>
            <p>View all of your Income and Spendings.</p>
            <div className="overview-item-content">
              <div className="income-chart">
                <h3>$9,650.00</h3>
                <p>Income of March 2023</p>
                {/* <!-- Add chart here -->*/}
              </div>
              <div className="spending-chart">
                <h3>$7,845.00</h3>
                <p>Spendings of March 2023</p>
                     {/* <!-- Add chart here -->*/}
              </div>
            </div>
          </div>
          <div className="assets-section">
            <h2>Your Assets</h2>
            <p>View all of your assets in one place</p>
            <div className="assets-content">
              <div className="asset-analysis">
                <h3>Asset analysis</h3>
                     {/* <!-- Add chart here -->*/}
              </div>
              <div className="accounts">
                <h3>Accounts</h3>
                <div className="account-item">
                  <div className="account-icon visa"></div>
                  <div className="account-info">
                    <p>Visa debit card</p>
                    <p>$88,200.00</p>
                  </div>
                </div>
                <div className="account-item">
                  <div className="account-icon mastercard"></div>
                  <div className="account-info">
                    <p>Mastercard</p>
                    <p>$64,120.00</p>
                  </div>
                </div>
                <div className="account-item">
                  <div className="account-icon paypal"></div>
                  <div className="account-info">
                    <p>Paypal</p>
                    <p>$2,930.50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-transactions">
            <h2>Latest transactions</h2>
            <ul>
              <li>
                <div className="transaction-name">Jacob Jones</div>
                <div className="transaction-status in-progress">In progress</div>
                <div className="transaction-source">Online</div>
                <div className="transaction-amount">- $2,180.00</div>
              </li>
              <li>
                <div className="transaction-name">Kathryn Murphy</div>
                <div className="transaction-status done">Done</div>
                <div className="transaction-source">Apple Store</div>
                <div className="transaction-amount">- $12,345.00</div>
              </li>
              <li>
                <div className="transaction-name">Jenny Wilson</div>
                <div className="transaction-status warning">Warning</div>
                <div className="transaction-source">Louis vuitton</div>
                <div className="transaction-amount">- $6,245.00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
