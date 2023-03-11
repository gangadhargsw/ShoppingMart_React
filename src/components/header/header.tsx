import './header.styled.css';
import  flipkartLogo  from '../../images/flipkart.png';
import plusImg from '../../images/plus.png';
import searchImg from '../../images/search.png';
import down from '../../images/down.png';
import React from 'react';

const Header = () => {
    return (
        <div className='header'>
          <div className='logo'>
            <img src={flipkartLogo} alt="logo" className='flip-img'/><br />
            <span className='explore'>Explore</span>
            <span className='plus'>Plus</span>
            <img src={plusImg} alt="logo" className='plus-img'/><br />
          </div>
          <div className='search' >
            <input type='text' placeholder='Search for products, brands and more'/>
            <button className='search-btn'>
             <img src={searchImg} alt="img"/>
            </button>
          </div>
          <div className='login'>
            <button className='login-btn'>Login</button>
          </div>
          <div className='seller'>Become a Seller</div>
          <div className='seller'>More</div>
          <div className='up-down'>
            <img src={down} alt="img"/>
          </div>
          <div className='right-side'></div>
        </div>
    );  
}

export default Header;
