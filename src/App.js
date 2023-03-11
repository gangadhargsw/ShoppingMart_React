import { Component } from 'react';
import './App.css';
import Frontmenu from './components/frontmenu/frontmenu.tsx';
import Header from './components/header/header.tsx';
import Slider2 from './components/slider-2/slider2.tsx';
import Slider from './components/slider/slider.tsx';

class App extends Component {
  render() {
    return (
      <div className='body'>
        <Header></Header>
        <Frontmenu></Frontmenu>
        <Slider></Slider>
        <Slider2></Slider2>
      </div> 
    );  
  }
}

export default App;
