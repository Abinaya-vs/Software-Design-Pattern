import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HowToSell from './HowToSell';
import takebook from './assets/sread.png';
import girlreader4 from './assets/girlreader4.png';
import bookk from './assets/bookk.png';
import decor from './assets/decor.png';
import chubbycat from './assets/topp.png';
import star from './assets/star.png';
import AdBanner from './AdBanner';
import FictionalBooks from './FictionalBooks';
import WhySellBooks from './WhySellBooks';
import Navbar2 from "../Components/Navbar2";
import Whyuswithoutnav from './Whyuswihtoutnav';



// Sample book data (this should be replaced with real data from your database or API)
const booksData = [
  { id: 1, title: "The Great Adventure", author: "John Doe", price: 200, image: "https://m.media-amazon.com/images/I/71E8VNPC1dL._SY466_.jpg", category: "Fiction", location: "Mumbai" },
  { id: 2, title: "Mystery of the Lost City", author: "Jane Smith", price: 300, image: "https://i.thriftbooks.com/api/imagehandler/m/7A5EBC93CD875C071C84E782229A772EEB207882.jpeg", category: "Non-Fiction", location: "Delhi" },
  { id: 3, title: "The Silent Witness", author: "Robert Brown", price: 150, image: "https://i.thriftbooks.com/api/imagehandler/m/7459A7406C15589568814B51FD3E6F0EA7689E1E.jpeg", category: "Fiction", location: "Bangalore" },
  { id: 4, title: "Journey Through Time", author: "Emily Johnson", price: 250, image: "https://i.thriftbooks.com/api/imagehandler/m/58B157B78BA3E577F0E47AAA02A18D29ABA352B2.jpeg", category: "Fiction", location: "Hyderabad" },
  { id: 5, title: "Secrets of the Forest", author: "Michael Lee", price: 100, image: "https://m.media-amazon.com/images/I/41Zuiq41xLL._SL350_.jpg", category: "Fiction", location: "Coimbatore" },
  // Add more book data as needed
];

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const foundBook = booksData.find(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!category || book.category === category) &&
        (!location || book.location === location)
    );

    if (foundBook) {
      navigate('/book', { state: { book: foundBook } });
    } else {
      alert('Book not found');
    }
  };

  return (
    <div><Navbar2/>
    <div className='for-nextpage'>
<div className='imgtop'>
    <div className="image-sectiontop1">  {/* =====> logo*/}
    <img src={bookk} alt="" />
    </div>

    <div className="image-sectiontop3">  {/* =====> logo*/}
    <img src={decor} alt="" />
    </div>
    <div className="image-sectiontop2">  {/* =====> logo*/}
    <img src={chubbycat} alt="" />
    </div>
    <div className="image-sectiontop">  {/* =====> logo*/}
    <img src={girlreader4} alt="" />
  </div>
  </div>
      <div className="home-container">
     
        <div className="left-sectionhome">
          <h1>Affordable Pre-loved Books</h1>
          <p>
            Affordable Pre-loved Books
            Buy and Sell Pre-loved Books in India. Search for and Purchase Second-hand Books Locally. 
            Post your books and Sell Your Old Books in Your City.
          </p><br></br>
          <div> <a href='/Step1' className='sell-buttonhome'>Sell Used Books</a></div>
          
        </div>  
        <div className='middle-section'>
        <div className="image-section3">  {/* =====> logo*/}
        <img src={takebook} alt="" />
      </div>


      
        </div>
        <div className="right-sectionnn">
          <form className="search-formmm" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="What book are you looking for..."
              className="form-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <select
              className="form-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Academic">Academic</option>
              <option value="Genres and Themes">Genres and Themes</option>
              <option value="Hand-Written Copies">Hand-Written Copies</option>
            </select>
            <input
              type="text"
              placeholder="Location..."
              className="form-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <button type="submit" className="search-book-button">Search</button>
          </form>
        </div>
       
      </div>
      <div className="image-sectionbot1">  {/* =====> logo*/}
      <img src={star} alt="" />
      </div>
      <div className='fic'>
      
      
      <FictionalBooks/>
      </div>
      <div className='buybook'>
      <AdBanner />
      <br></br><br></br>
      </div>
      <WhySellBooks/>

      <div className='how'>
        <HowToSell />
      </div>
      <br>
      </br>
    <Whyuswithoutnav/>
    </div>
    </div>
  );
}

export default Home;
