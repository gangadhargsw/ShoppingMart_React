import './frontmenu.styled.css';
import React from 'react';
import allOffers from '../../images/all-offers.png';
import mobiles from '../../images/mobiles.png';
import electronics from '../../images/electronics.png';
import laptops from '../../images/laptops.png';
import fashions from '../../images/fashions.png';
import beauty from '../../images/beauty.png';
import furniture from '../../images/home-furniture.png';
import flights from '../../images/flights.png';
import grocery from '../../images/grocery.png';


const Frontmenu = () => {
    return (
        <div className='menu'>
            <div className='item'>
                <div className='item-img'>
                <img src={allOffers} alt='All offers'/>
                </div>
                <p>Top Offers</p>
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={mobiles} alt='Mobiles & Tablets'/>
                </div>
                <p>Mobiles & Tablets</p>
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={electronics} alt='Electronics'/>
                </div>
                <p>Electronics</p>
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={laptops} alt='TVs & Appliances'/>
                </div>
                <p>TVs & Appliances</p>
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={fashions} alt='Fashions'/>
                </div>
                <p>Fashions</p>  
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={beauty} alt='Beauty'/>
                </div>
                <p>Beauty</p>  
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={furniture} alt='Home & Furniture'/>
                </div>
                <p>Home & Furniture</p>  
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={flights} alt='Flights'/>
                </div>
                <p>Flights</p>  
            </div>
            <div className='item'>
            <div className='item-img'>
                <img src={grocery} alt='Grocery'/>
                </div>
                <p>Grocery</p>  
            </div>
        </div>
    );  
}

export default Frontmenu;
