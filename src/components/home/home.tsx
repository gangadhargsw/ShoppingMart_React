import React from "react";
import Slider2 from '../slider-2/slider2.tsx';
import Slider from '../slider/slider.tsx';
import  Frontmenu  from "../frontmenu/frontmenu.tsx";

const Home = () => {
    return (
        <div className="home">
            <Frontmenu />
            <Slider />
            <Slider2 />
        </div>    
    )
};

export default Home;
