import React from 'react';
import '../Home/Home.css';
import group from '../../assets/Group 81.png';
import headImg from '../../assets/Header Illustration.png'

const Home = () => {
  return (
    <div className='home-block'>
      <div className='home-block-image'>
        <img className='home-block-image-img' src={headImg}></img>
      </div>
      <div className='home-block-description'>
        <h2>Let's Build Something amazing with GPT-3 OpenAI</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='home-block-description-inputBlock'>
          <input placeholder='Your Email Address'></input>
          <button>Get Started</button>
        </div>
        <div className='home-block-description-subscribe'>
          <div>
            <img src={group}></img>
          </div>
          <div>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

/*
<div className='home-block-imgBox'>
        <div className='home-block-imgBox-img'></div>
      </div>*/