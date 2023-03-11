import './slider.styled.css';
import React from 'react';
import acBanner from '../../images/AC-banner.png';
import left from '../../images/left-arrow.svg';
import right from '../../images/right-arrow.svg';
import bankOffer from '../../images/ICICI-banner.png'

const Slider = () => {
    return (
        <>
        <div className='container'>
            <img src={acBanner} alt='Grocery'/>
            <div className='left'>
            <img  src={left} alt="left arrow"/>
            </div>
            <div className='right'>
            <img  src={right} alt="right arrow"/>
            </div>
        </div>
        <div className='bank-offer'>
        <img  src={bankOffer} alt="Bank offer"/>
        </div>
        </>
    );  
}

export default Slider;
