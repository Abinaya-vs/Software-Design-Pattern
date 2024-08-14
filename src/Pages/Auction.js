import React, { useState } from 'react';
import './Auction.css';
import Navbar2 from "../Components/Navbar2";
const books =[
  { id: 1, title: 'Ugly Love', author: 'John Doe', price: '₹200', image: 'https://m.media-amazon.com/images/I/71E8VNPC1dL._SY466_.jpg', auctionDetails: 'Auction details for The Great Adventure' },
  { id: 2, title: 'Mystery of the Lost City', author: 'Jane Smith', price: '₹300', image: 'https://i.thriftbooks.com/api/imagehandler/m/7A5EBC93CD875C071C84E782229A772EEB207882.jpeg', auctionDetails: 'Auction details for Mystery of the Lost City' },
  { id: 3, title: 'The Silent Witness', author: 'Robert Brown', price: '₹150', image: 'https://i.thriftbooks.com/api/imagehandler/m/7459A7406C15589568814B51FD3E6F0EA7689E1E.jpeg', auctionDetails: 'Auction details for The Silent Witness' },
  { id: 4, title: 'Journey Through Time', author: 'Emily Johnson', price: '₹250', image: 'https://i.thriftbooks.com/api/imagehandler/m/58B157B78BA3E577F0E47AAA02A18D29ABA352B2.jpeg', auctionDetails: 'Auction details for Journey Through Time' },
  { id: 5, title: 'Secrets of the Forest', author: 'Michael Lee', price: '₹100', image: 'https://m.media-amazon.com/images/I/41Zuiq41xLL._SL350_.jpg', auctionDetails: 'Auction details for Secrets of the Forest' },
  { id: 6, title: 'Beyond the Horizon', author: 'Sarah Davis', price: '₹180', image: 'https://i.thriftbooks.com/api/imagehandler/m/DA83829A874B57263386CFB314C840371263E34C.jpeg', auctionDetails: 'Auction details for Beyond the Horizon' },
  { id: 7, title: 'Echoes of the Past', author: 'David Martinez', price: '₹220', image: 'https://i.thriftbooks.com/api/imagehandler/m/D19C70F858C3E23580A3262A4E4B32A1D27FE059.jpeg', auctionDetails: 'Auction details for Echoes of the Past' },
  { id: 8, title: 'The Hidden Treasure', author: 'Laura Wilson', price: '₹270', image: 'https://i.thriftbooks.com/api/imagehandler/m/56E70107A03534FC30BEB0A4BE976F9585EF745A.jpeg', auctionDetails: 'Auction details for The Hidden Treasure' },
  { id: 9, title: 'Legends of the Sea', author: 'James Moore', price: '₹350', image: 'https://i.thriftbooks.com/api/imagehandler/m/FAA9CA41DDFBDC34BC0A8F269FCF55A6E9DE4B4A.jpeg', auctionDetails: 'Auction details for Legends of the Sea' },
  { id: 10, title: 'A New Dawn', author: 'Olivia Taylor', price: '₹400', image: 'https://i.thriftbooks.com/api/imagehandler/m/8E288A555DFAFF24D06AC1EB89808EEFB0BFDBFE.jpeg', auctionDetails: 'Auction details for A New Dawn' },
  { id: 11, title: 'The Final Quest', author: 'William Anderson', price: '₹120', image: 'https://i.thriftbooks.com/api/imagehandler/m/6BD6A732DB4492E8F18D12301D183EC84AC87839.jpeg', auctionDetails: 'Auction details for The Final Quest' },
  { id: 12, title: 'Whispers in the Wind', author: 'Sophia Thomas', price: '₹230', image: 'https://i.thriftbooks.com/api/imagehandler/m/1B9F6BE2655F577CB3DC88F0A4CCD0C61C4DFF9E.jpeg', auctionDetails: 'Auction details for Whispers in the Wind' },
  { id: 13, title: 'Shadows of the Night', author: 'Daniel Harris', price: '₹300', image: 'https://i.thriftbooks.com/api/imagehandler/m/C18F3957A4F5F4B47031CDA686DF9F0D498F27C8.jpeg', auctionDetails: 'Auction details for Shadows of the Night' },
  { id: 14, title: 'The Forgotten Realm', author: 'Emma Clark', price: '₹190', image: 'https://i.thriftbooks.com/api/imagehandler/m/D591EEAAC2C4ECD7BD60C37F6AFECE9FA24F5B78.jpeg', auctionDetails: 'Auction details for The Forgotten Realm' },
  { id: 15, title: 'Tales of the Unknown', author: 'Lucas Lewis', price: '₹320', image: 'https://i.thriftbooks.com/api/imagehandler/m/ADA4A2F17511E10C8E03AB3669E1A50AD06946D8.jpeg', auctionDetails: 'Auction details for Tales of the Unknown' },
  { id: 16, title: 'The Lost Legend', author: 'Mia Walker', price: '₹410', image: 'https://i.thriftbooks.com/api/imagehandler/m/4C378E7555DCF10D03334241441FC39C168C6E50.jpeg', auctionDetails: 'Auction details for The Lost Legend' },
  { id: 17, title: 'The Enchanted Forest', author: 'Ethan Young', price: '₹140', image: 'https://i.thriftbooks.com/api/imagehandler/m/B865FB2F96B20E9448AFD58D5A7D41D60319020E.jpeg', auctionDetails: 'Auction details for The Enchanted Forest' },
  { id: 18, title: 'Mystic Realms', author: 'Ava King', price: '₹280', image: 'https://i.thriftbooks.com/api/imagehandler/m/DECD9800E607E5EDA27915C8B0548DFB9A09FF17.jpeg', auctionDetails: 'Auction details for Mystic Realms' },
  { id: 19, title: 'The Ancient Prophecy', author: 'Noah Scott', price: '₹240', image: 'https://i.thriftbooks.com/api/imagehandler/m/FAA9CA41DDFBDC34BC0A8F269FCF55A6E9DE4B4A.jpeg', auctionDetails: 'Auction details for The Ancient Prophecy' },
  { id: 20, title: 'The Final Chapter', author: 'Isabella Green', price: '₹160', image: 'https://i.thriftbooks.com/api/imagehandler/m/24B5BF6FDECE0B0B989F8A44858CABB7208C780D.jpeg', auctionDetails: 'Auction details for The Final Chapter' }

];


const defaultBidders = [
  { name: 'John Doe', bidAmount: '₹200', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Jane Doe', bidAmount: '₹250', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Alex Smith', bidAmount: '₹300', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Emily Johnson', bidAmount: '₹350', profilePic: 'https://randomuser.me/api/portraits/women/3.jpg' }
];

const users = [
  { id: 1, name: 'Alice', profilePic: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, name: 'Bob', profilePic: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, name: 'Charlie', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Diana', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 5, name: 'Eva', profilePic: 'https://randomuser.me/api/portraits/women/5.jpg' }
];

const getRandomDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
};
  

const sortBiddersByAmount = (bidders) => {
  return [...bidders].sort((a, b) => {
    const amountA = typeof a.bidAmount === 'string' ? parseInt(a.bidAmount.replace('₹', ''), 10) : a.bidAmount;
    const amountB = typeof b.bidAmount === 'string' ? parseInt(b.bidAmount.replace('₹', ''), 10) : b.bidAmount;
    return amountB - amountA;
  });
};

const Auction = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [bidName, setBidName] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [bidders, setBidders] = useState({});
  const [highestBid, setHighestBid] = useState(0);
  const [currentUserBid, setCurrentUserBid] = useState(null);
  const [bookDescriptions, setBookDescriptions] = useState({});

  const calculateMinimumBidAmount = () => {
    const topBidAmount = Math.max(
      ...sortBiddersByAmount(defaultBidders).map(bidder => typeof bidder.bidAmount === 'string' ? parseInt(bidder.bidAmount.replace('₹', ''), 10) : bidder.bidAmount),
      highestBid
    );
    return topBidAmount + 50;
  };

  const handlePlaceBid = () => {
    const bid = parseInt(bidAmount, 10);
    const minBidAmount = calculateMinimumBidAmount();

    if (selectedBook && bid && bid >= minBidAmount) {
      const user = users.find(u => u.name === bidName) || { name: bidName, profilePic: 'https://randomuser.me/api/portraits/lego.jpg' };

      setBidders(prevBidders => {
        const updatedBidders = { ...prevBidders };
        if (!updatedBidders[selectedBook.id]) {
          updatedBidders[selectedBook.id] = sortBiddersByAmount(defaultBidders); // Initialize with sorted default bidders if none exist
        }

        const existingBidderIndex = updatedBidders[selectedBook.id].findIndex(bidder => bidder.name === bidName);

        if (existingBidderIndex === -1) {
          // Add new bid if user hasn't placed a bid yet
          updatedBidders[selectedBook.id] = [{ name: bidName, bidAmount: `₹${bid}`, profilePic: user.profilePic }, ...updatedBidders[selectedBook.id].slice(0, 4)];
        } else {
          // Update the existing bid amount
          updatedBidders[selectedBook.id][existingBidderIndex].bidAmount = `₹${bid}`;
        }

        return updatedBidders;
      });

      setHighestBid(bid);
      setCurrentUserBid(bid); // Store the current user's bid
      setBidName('');
      setBidAmount('');
    } else {
      alert(`Your bid must be at least ₹${minBidAmount}`);
    }
  };

  const handleIncreaseBid = () => {
    if (selectedBook && currentUserBid !== null) {
      const newBidAmount = currentUserBid + 50;

      setBidders(prevBidders => {
        const updatedBidders = { ...prevBidders };
        const updatedBidderList = updatedBidders[selectedBook.id] || sortBiddersByAmount(defaultBidders);

        // Update the current user's bid amount
        updatedBidderList[0].bidAmount = `₹${newBidAmount}`;

        // Re-sort the list to ensure correct order
        updatedBidders[selectedBook.id] = sortBiddersByAmount(updatedBidderList);
        return updatedBidders;
      });

      setCurrentUserBid(newBidAmount);
      setHighestBid(newBidAmount); // Update highest bid with new amount
    } else {
      alert('Please place a bid before increasing it.');
    }
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
    setHighestBid(0); // Reset highest bid when changing book
    setBidName('');
    setBidAmount('');
    setCurrentUserBid(null); // Reset user's bid when changing book

    // Store the book description to ensure it remains constant
    setBookDescriptions(prevDescriptions => ({
      ...prevDescriptions,
      [book.id]: getRandomDescription()
    }));
  };

  return (
    <div><Navbar2/>
    <div className="auction-container">
      <div className="column book-list">
        {books.map(book => (
          <div key={book.id} className="book-item" onClick={() => handleSelectBook(book)}>
            {book.title}
          </div>
        ))}
      </div>
      <div className="column book-details">
        {selectedBook ? (
          <>
            <h2>{selectedBook.title}</h2>
            <img src={selectedBook.image} alt={selectedBook.title} className="book-image" />
            <p>Rate: {selectedBook.price}</p>
            <p>Description: {bookDescriptions[selectedBook.id] || 'Loading...'}</p>
          </>
        ) : (
          <p>Select a book to see details</p>
        )}
      </div>
      <div className="column auction-details">
        {selectedBook ? (

          <>
          <h3>Auction Details</h3>
          <p>{selectedBook.auctionDetails}</p>
        <b>  <p>Auction Ends in 2 days</p></b>
          <div className='dd'>
            <div className="bid-input">
              <label htmlFor="bid-name">Your Name:</label>
              <input
                id="bid-name"
                type="text"
                value={bidName}
                placeholder="Enter your name"
                onChange={e => setBidName(e.target.value)}
              />
              <label htmlFor="bid-amount">Bid Amount:</label>
              <input
                id="bid-amount"
                type="number"
                value={bidAmount}
                onChange={e => setBidAmount(e.target.value)}
                placeholder={`Minimum ₹${calculateMinimumBidAmount()}`}
                disabled={currentUserBid !== null}
              />
              </div>
              <button onClick={handlePlaceBid} disabled={currentUserBid !== null} style={{marginLeft:'-26px'}} className='aucbut1'>Place a Bid</button>
              <button onClick={handleIncreaseBid} disabled={currentUserBid === null} className='aucbut'>
                add on ₹50
              </button>
            </div>
            <div className='topb'>
            <h4>Top Bidders</h4>
            <div className="bidder-list">
              {(bidders[selectedBook.id] || sortBiddersByAmount(defaultBidders)).map((bidder, index) => (
                <div key={index} className={`bidder-item ${index < 3 ? 'top-bidder' : ''}`}>
                  <img src={bidder.profilePic} alt={bidder.name} className="bidder-profile-pic" />
                  <span>{bidder.name}: {bidder.bidAmount}</span>
                </div>
              ))}
            </div>
            </div>
            <h4>Auction Status</h4>
            <p>Current Highest Bid: ₹{highestBid}</p>
          </>
        ) : (
          <p>Select a book to see auction details</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Auction;
