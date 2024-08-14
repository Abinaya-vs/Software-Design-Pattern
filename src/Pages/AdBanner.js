import React from 'react';
import './AdBanner.css'; 
import backgroundVideo from './background.mp4';
import girlreader3 from './assets/for_video.png'; 

const AdBanner = () => {
    return (
        <div className='ski'>
        <div className="image-sectiong">  {/* =====> logo*/}
        <img src={girlreader3} alt="" />
        </div>
        <div className="ad-banner">
{/*video tag*/}            <video autoPlay muted loop className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
{/*Content*/}
            <div className="ad-content">
                <h1>Where To Sell Used Second Hand Books?</h1>
                <p>List your used book on our platform, and we will find you a buyer willing to pay your price.</p>
            </div>
{/*Button*/}
            <a href='/Step1'><button className="post-ad-button">Post your books</button></a>
        </div>
        </div>
    );
};

export default AdBanner;
