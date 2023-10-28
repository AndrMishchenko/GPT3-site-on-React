import './App.css';
import Navigation from './components/Navigation';
import blure from './assets/blur-01.png'

function App() {
  return (
    <div className='wrapper'>
      <img className='main-img' src={blure}></img>
      <div className='content-box'>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
