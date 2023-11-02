import './App.css';
import Navigation from './components/Navigation/Navigation';
import blure from './assets/blur-01.png';
import blure2 from './assets/blur-02.png'
import blure3 from './assets/blur-03.png'
import Home from './components/Home/Home';
import Parthners from './components/Parthners/Parthners';
import WhatIsGPT from './components/WhatIsGPT/WhatIsGPT';
import OpenAI from './components/OpenAI/OpenAI';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Library from './components/Library/Library';

function App() {
  return (
    <div className='wrapper'>
      <img className='main-img' src={blure}></img>
      <div className='content-box'>
        <Navigation/>
        <Home/>
        <img src={blure3} className='second-img'></img>
        <Parthners/>
        <WhatIsGPT/>
        <OpenAI/>
        <CaseStudies/>
        <Library/>
      </div>
      <img src={blure2} className='third-img'></img>
    </div>
  );
}

export default App;
