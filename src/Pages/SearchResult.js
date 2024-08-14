import React from 'react';
import './SearchResult.css';

function SearchResult() {
  return (
    <div className="search-resultss">
      <header className="headerrr">
        <div className="header-overlay">
          <h1>Buy Second Hand Books Online In India</h1>
        </div>
      </header>
      <div className="search-containerr">
        <form className="search-form">
          <div className="form-group">
            <label htmlFor="city">Search By City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="title">Category</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="form-group">
            <label htmlFor="simpleOrFeatured">Item Condition</label>
            <select id="simpleOrFeatured" name="simpleOrFeatured">
              <option value="">Select Option</option>
              <option value="">New</option>
              <option value="">Used</option>
              <option value="">Vintage</option>
             
              {/* Add more options as needed */}
            </select>
          </div>
       <button className='buttt' type="submit">  <a href='./Caterory'> Search </a></button>
        </form>
        </div>
        <div className="result-container">
        
      </div>
    </div>
  );
}

export default SearchResult;
