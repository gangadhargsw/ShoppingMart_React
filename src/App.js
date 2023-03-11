import { Component } from 'react';
import './App.css';
import Header from './components/header/header.tsx';

class App extends Component {
  render() {
    return (
      <div className='body'>
        <Header></Header>
      </div> 
    );  
  }
}

export default App;
