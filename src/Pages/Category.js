import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';
import './AddToCart';
import Navbar2 from "../Components/Navbar2";

const Category = () => {
  const navigate = useNavigate(); 

  const handleBookClick = (book) => {
    navigate('/book', { state: { book } });
  };

  const initialCategories = [
    {
      title: "Fictional", 
      books: [
        { id: 1, title: "The Great Adventure", author: "John Doe", price: 200, image: "https://m.media-amazon.com/images/I/71E8VNPC1dL._SY466_.jpg" },
        { id: 2, title: "Mystery of the Lost City", author: "Jane Smith", price: 300, image: "https://i.thriftbooks.com/api/imagehandler/m/7A5EBC93CD875C071C84E782229A772EEB207882.jpeg" },
        { id: 3, title: "The Silent Witness", author: "Robert Brown", price: 150, image: "https://i.thriftbooks.com/api/imagehandler/m/7459A7406C15589568814B51FD3E6F0EA7689E1E.jpeg" },
        { id: 4, title: "Journey Through Time", author: "Emily Johnson", price: 250, image: "https://i.thriftbooks.com/api/imagehandler/m/58B157B78BA3E577F0E47AAA02A18D29ABA352B2.jpeg" },
        { id: 5, title: "Secrets of the Forest", author: "Michael Lee", price: 100, image: "https://m.media-amazon.com/images/I/41Zuiq41xLL._SL350_.jpg" }
      ]
    },
    {
      title: "Academic", 
      books: [
        { id: 6, title: "Beyond the Horizon", author: "Sarah Davis", price: 180, image: "https://i.thriftbooks.com/api/imagehandler/m/DA83829A874B57263386CFB314C840371263E34C.jpeg" },
        { id: 7, title: "Echoes of the Past", author: "David Martinez", price: 220, image: "https://i.thriftbooks.com/api/imagehandler/m/D19C70F858C3E23580A3262A4E4B32A1D27FE059.jpeg" },
        { id: 8, title: "The Hidden Treasure", author: "Laura Wilson", price: 270, image: "https://i.thriftbooks.com/api/imagehandler/m/56E70107A03534FC30BEB0A4BE976F9585EF745A.jpeg" },
        { id: 9, title: "Legends of the Sea", author: "James Moore", price: 350, image: "https://i.thriftbooks.com/api/imagehandler/m/FAA9CA41DDFBDC34BC0A8F269FCF55A6E9DE4B4A.jpeg" },
        { id: 10, title: "Love and Gelato", author: "Olivia Taylor", price: 400, image: "https://i.thriftbooks.com/api/imagehandler/m/8E288A555DFAFF24D06AC1EB89808EEFB0BFDBFE.jpeg" }
      ]
    },
    {
      title: "Comic", 
      books: [
        { id: 11, title: "The Final Quest", author: "William Anderson", price: 120, image: "https://i.thriftbooks.com/api/imagehandler/m/6BD6A732DB4492E8F18D12301D183EC84AC87839.jpeg" },
        { id: 12, title: "Whispers in the Wind", author: "Sophia Thomas", price: 230, image: "https://i.thriftbooks.com/api/imagehandler/m/1B9F6BE2655F577CB3DC88F0A4CCD0C61C4DFF9E.jpeg" },
        { id: 13, title: "Shadows of the Night", author: "Daniel Harris", price: 300, image: "https://i.thriftbooks.com/api/imagehandler/m/C18F3957A4F5F4B47031CDA686DF9F0D498F27C8.jpeg" },
        { id: 14, title: "The Forgotten Realm", author: "Emma Clark", price: 190, image: "https://i.thriftbooks.com/api/imagehandler/m/D591EEAAC2C4ECD7BD60C37F6AFECE9FA24F5B78.jpeg" },
        { id: 15, title: "Tales of the Unknown", author: "Lucas Lewis", price: 320, image: "https://i.thriftbooks.com/api/imagehandler/m/ADA4A2F17511E10C8E03AB3669E1A50AD06946D8.jpeg" }
      ]
    },
    {
      title: "Handwritten", 
      books: [
        { id: 16, title: "The Lost Legend", author: "Mia Walker", price: 410, image: "https://i.thriftbooks.com/api/imagehandler/m/4C378E7555DCF10D03334241441FC39C168C6E50.jpeg" },
        { id: 17, title: "The Enchanted Forest", author: "Ethan Young", price: 140, image: "https://i.thriftbooks.com/api/imagehandler/m/B865FB2F96B20E9448AFD58D5A7D41D60319020E.jpeg" },
        { id: 18, title: "Mystic Realms", author: "Ava King", price: 280, image: "https://i.thriftbooks.com/api/imagehandler/m/DECD9800E607E5EDA27915C8B0548DFB9A09FF17.jpeg" },
        { id: 19, title: "The Ancient Prophecy", author: "Noah Scott", price: 240, image: "https://i.thriftbooks.com/api/imagehandler/m/FAA9CA41DDFBDC34BC0A8F269FCF55A6E9DE4B4A.jpeg" },
        { id: 20, title: "The Final Chapter", author: "Isabella Green", price: 160, image: "https://i.thriftbooks.com/api/imagehandler/m/24B5BF6FDECE0B0B989F8A44858CABB7208C780D.jpeg" }
      ]
    }
  ];

  const [categories] = useState(initialCategories);
  const [filters, setFilters] = useState({
    deliveryDay: "",
    primeReading: false,
    priceRange: [0, 500],
    category: "",
    customerReview: 0,
    newArrivals: "",
    madeForAmazon: false,
    payOnDelivery: false,
    author: [],
    discount: 0,
  });

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange: [0, value],
    }));
  };

  const handleAuthorChange = (e) => {
    const { value } = e.target;
    setFilters((prevFilters) => {
      const newAuthors = prevFilters.author.includes(value)
        ? prevFilters.author.filter((author) => author !== value)
        : [...prevFilters.author, value];
      return { ...prevFilters, author: newAuthors };
    });
  };

  const filteredBooks = categories
    .map((category) => ({
      ...category,
      books: category.books.filter((book) => {
        return (
          book.price >= filters.priceRange[0] &&
          book.price <= filters.priceRange[1]
        );
      }),
    }))
    .filter((category) => category.books.length > 0);

  return (
    <div><Navbar2/>
    <div className="category-page">
      <div className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          <h3>Delivery Day</h3>
          <label>
            <input
              type="radio"
              name="deliveryDay"
              value="Get It Today"
              onChange={handleFilterChange}
            />
            Get It Today
          </label>
          <label>
            <input
              type="radio"
              name="deliveryDay"
              value="Get It by Tomorrow"
              onChange={handleFilterChange}
            />
            Get It by Tomorrow
          </label>
          <label>
            <input
              type="radio"
              name="deliveryDay"
              value="Get It in 2 Days"
              onChange={handleFilterChange}
            />
            Get It in 2 Days
          </label>
        </div>
     
        <div className="filter-group">
          <h3>Price</h3>
          <input
            type="range"
            name="priceRange"
            min="0"
            max="500"
            value={filters.priceRange[1]}
            onChange={handlePriceChange}
          />
          <span>₹{filters.priceRange[1]}</span>
        </div>
        <div className="filter-group">
          <h3>Customer Review</h3>
          <label>
            <input
              type="radio"
              name="customerReview"
              value="4"
              onChange={handleFilterChange}
            />
            4 Stars & Up
          </label>
        </div>
        <div className="filter-group">
          <h3>New Arrivals</h3>
          <label>
            <input
              type="radio"
              name="newArrivals"
              value="Last 30 days"
              onChange={handleFilterChange}
            />
            Last 30 days
          </label>
          <label>
            <input
              type="radio"
              name="newArrivals"
              value="Last 90 days"
              onChange={handleFilterChange}
            />
            Last 90 days
          </label>
          <label>
            <input
              type="radio"
              name="newArrivals"
              value="Next 90 days"
              onChange={handleFilterChange}
            />
            Next 90 days
          </label>
        </div>
       
        <div className="filter-group">
          <h3>Pay On Delivery</h3>
          <label>
            <input
              type="checkbox"
              name="payOnDelivery"
              checked={filters.payOnDelivery}
              onChange={handleFilterChange}
            />
            Eligible for Pay On Delivery
          </label>
        </div>
        <div className="filter-group">
          <h3>Author</h3>
          {['John Doe', 'Jane Smith', 'Robert Brown', 'Emily Johnson', 'Michael Lee', 'Sarah Davis'].map(author => (
            <label key={author}>
              <input
                type="checkbox"
                name="author"
                value={author}
                checked={filters.author.includes(author)}
                onChange={handleAuthorChange}
              />
              {author}
            </label>
          ))}
        </div>
        <div className="filter-group">
          <h3>Discount</h3>
          {['10%', '25%', '35%', '50%', '60%', '70%'].map(discount => (
            <label key={discount}>
              <input
                type="radio"
                name="discount"
                value={discount}
                onChange={handleFilterChange}
              />
              {discount} Off or more
            </label>
          ))}
        </div>
      </div>
      <div className="main-content">
        <h1 className="category-title">Books</h1>
        <div className="books-grid">
          {filteredBooks.map((category) => (
            <div key={category.title} className="category-section">
              <h2 className="category-title">{category.title}</h2>
              <div className="category-books">
                {category.books.map((book) => (
                  <div className="book-card" key={book.id} onClick={() => handleBookClick(book)}>
                    <img className="book-cover" src={book.image} alt={book.title} />
                    <div className="book-details">
                      <h2>{book.title}</h2>
                      <p>{book.author}</p>
                      <p>{`₹${book.price}`}</p>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;
