import './App.css';
import Navigation from './components/Navigation/Navigation';
import blure from './assets/blur-01.png'
import Home from './components/Home/Home';
import Parthners from './components/Parthners/Parthners';
import WhatIsGPT from './components/WhatIsGPT/WhatIsGPT';

function App() {
  return (
    <div className='wrapper'>
      <img className='main-img' src={blure}></img>
      <div className='content-box'>
        <Navigation/>
        <Home/>
        <Parthners/>
        <WhatIsGPT/>
      </div>
    </div>
  );
}

export default App;
