import './App.css';
import Footer from './components/footer/footer.tsx';
import Header from './components/header/header.tsx';
import Main from './Main';

const App = () => {
    return (
      <div className='container-parent'>
        <Header></Header>
        <div className='body'>
          <Main></Main>
        </div>
        <Footer></Footer>
      </div> 
    );  
}

export default App;
