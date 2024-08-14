import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PostBook.css';

const PostBook = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className="post-book-container">
            <div className="book-card">
                <div className="book-card-header">
                    <h1>{data.title}</h1>
                    <span className="book-price">₹{data.price} (Negotiable)</span>
                </div>
                <div className="book-card-body">
                    {data.images && data.images.length > 0 && (
                        <div className="image-preview">
                            {data.images.map((file, index) => (
                                                               <div key={index} className="image-wrapper">
                                    <img src={URL.createObjectURL(file)} alt={`Book Image ${index}`} />
                                </div>
                            ))}
                        </div>
                    )}
                    <p><span>Category:</span> {data.category}</p>
                    <p><span>Condition:</span> {data.condition}</p>
                    <p><span>Description:</span> {data.description}</p>
                </div>
                <div className="book-card-footer">
                    <p><span>Type:</span> {data.priceType}</p>
                    <p><span>Publisher:</span> {data.publisher}</p>
                    <p><span>MRP:</span> ₹{data.mrp}</p>
                    <p><span>Publishing Year:</span> {data.publishingYear}</p>
                    <p><span>No. of Pages:</span> {data.pages}</p>
                    <p><span>Language:</span> {data.language}</p><br></br>
                 
                   <Link to="/"><button>Accept</button></Link> <br></br><br></br>
                   <Link to="/"><button>Reject</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default PostBook;
