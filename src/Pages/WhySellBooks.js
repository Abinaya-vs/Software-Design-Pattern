import React from 'react';
import './WhySellBooks.css';
import read from './assets/couplebook.png';
import searchic from './assets/searchic.png';
import compic from './assets/compic.png';
import shareic from './assets/shareic.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBalanceScale, faMoneyBillWave, faChartLine, faBell } from '@fortawesome/free-solid-svg-icons';

const WhySellBooks = () => {
  return (
    <div className="why-sell-books-container">
      
      <div className='imaaa'>
        <img src={read} alt="Company Logo" />
      </div>

      <div className="stepss">
      
        <div className="step">
          <h2>SEARCH</h2>
          <div className='imaa'>
          <img src={searchic} alt="Company Logo" />
          </div>
          <p>30+ buyback vendors</p>
        </div>

        <div className="step">
          <h2>COMPARE</h2>
          <div className='imaa'>
          <img src={compic} alt="Company Logo" />
          </div>
          <p>prices and seller feedback</p>
        </div>

        <div className="step">
          <h2>SELL</h2>
          <div className='imaa'>
          <img src={shareic} alt="Company Logo" />
         </div>
          <p>for the most money</p>
        </div>
        
      </div>
      <div className='whyyy'>
      <h2 className="why-title">Why sell books with Antiqurian?</h2>
      <div className="benefits">
        <div className="benefit">
          <FontAwesomeIcon icon={faSearch} className="benefit-icon" />
          <p><strong>30+ vendors</strong> compete to buy your books</p>
        </div>
        <div className="benefit">
          <FontAwesomeIcon icon={faBalanceScale} className="benefit-icon" />
          <p>Compare offers with a <strong>single search</strong></p>
        </div>
        <div className="benefit">
          <FontAwesomeIcon icon={faMoneyBillWave} className="benefit-icon" />
          <p>Find the <strong>highest buyback price</strong></p>
        </div>
        <div className="benefit">
          <FontAwesomeIcon icon={faBell} className="benefit-icon" />
          <p>Track price changes, get <strong>price alerts</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySellBooks;
