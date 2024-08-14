import React from 'react';
import './TopAuction.css';

const topBidders = [  
    { id: 1, name: 'John Doe', amount: 4300, time: 'Aug 28, 2022 at 7:38:31 AM', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, name: 'Jane Smith', amount: 4050, time: 'Aug 28, 2022 at 7:37:59 AM', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, name: 'Robert Brown', amount: 4000, time: 'Aug 28, 2022 at 7:37:48 AM', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, name: 'Emily White', amount: 3988, time: 'Aug 28, 2022 at 7:37:47 AM', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, name: 'Michael Johnson', amount: 3938, time: 'Aug 28, 2022 at 7:37:30 AM', profilePic: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 6, name: 'Jessica Williams', amount: 3888, time: 'Aug 28, 2022 at 7:37:30 AM', profilePic: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: 7, name: 'David Jones', amount: 3706, time: 'Aug 28, 2022 at 7:37:30 AM', profilePic: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: 8, name: 'Laura Brown', amount: 3656, time: 'Aug 28, 2022 at 7:37:30 AM', profilePic: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: 9, name: 'Chris Davis', amount: 3383, time: 'Aug 28, 2022 at 7:37:30 AM', profilePic: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: 10, name: 'Sarah Miller', amount: 3300, time: 'Aug 28, 2022 at 7:37:30 AM', profilePic: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ];

const TopAuction = () => {
  return (
    <div className="top-auction-container">
      <h1>Top Auction Participants</h1>
      <div className="bidders-list">
        {topBidders.map((bidder) => (
          <div key={bidder.id} className="bidder-card">
            <img src={bidder.profilePic} alt={bidder.name} className="bidder-img" />
            <div className="bidder-details">
              <h2>{bidder.name}</h2>
              <p>Highest Bid: ₹{bidder.amount}</p>
              <p>Time: {bidder.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAuction;
