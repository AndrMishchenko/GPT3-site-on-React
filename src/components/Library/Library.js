import React from 'react';
import '../Library/Library.css';
import firstPost from '../../assets/Rectangle 22-4.png'
import secondPost from '../../assets/Rectangle 22.png'
import thirdPost from '../../assets/Rectangle 22-1.png'
import fourthPost from '../../assets/Rectangle 22-2.png'
import fifthPost from '../../assets/Rectangle 22-3.png'

const Library = () => {
  return (
    <div className='library-block'>
      <div className='library-block-titleBlock'>
        <p>A lot is happening, We are blogging about it.</p>
      </div>
      <div className='library-block-library'>
        <div className='library-block-library-leftBlock'>
          <img src={firstPost}></img>
          <div className='library-block-library-leftBlock-description'>
            <p className='library-block-library-leftBlock-description-data'>Sep 26, 2021</p>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <p className='library-block-library-leftBlock-description-link'>Read Full Article</p>
          </div>
        </div>
        <div className='library-block-library-rightBlock'>
          <div className='library-block-library-rightBlock-firstLine'>
            <div className='library-block-library-rightBlock-firstLine-leftBox'>
              <img src={secondPost}></img>
              <div className='library-block-library-rightBlock-firstLine-leftBox-description'>
                <p className='library-block-library-rightBlock-firstLine-leftBox-description-data'>Sep 26, 2021</p>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <p className='library-block-library-rightBlock-firstLine-leftBlock-description-link'>Read Full Article</p>
              </div>
            </div>
            <div className='library-block-library-rightBlock-firstLine-rightBox'>
              <img src={thirdPost}></img>
              <div className='library-block-library-rightBlock-firstLine-rightBox-description'>
                <p className='library-block-library-rightBlock-firstLine-rightBox-description-data'>Sep 26, 2021</p>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <p className='library-block-library-rightBlock-firstLine-rightBox-description-link'>Read Full Article</p>
              </div>
            </div>
          </div>
          <div className='library-block-library-rightBlock-secondLine'>
            <div className='library-block-library-rightBlock-secondLine-leftBox'>
              <img src={fourthPost}></img>
              <div className='library-block-library-rightBlock-secondLine-leftBox-description'>
                <p className='library-block-library-rightBlock-secondLine-leftBox-description-data'>Sep 26, 2021</p>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <p className='library-block-library-rightBlock-secondLine-leftBlock-description-link'>Read Full Article</p>
              </div>
            </div>
            <div className='library-block-library-rightBlock-secondLine-rightBox'>
              <img src={fifthPost}></img>
              <div className='library-block-library-rightBlock-secondLine-rightBox-description'>
                <p className='library-block-library-rightBlock-secondLine-rightBox-description-data'>Sep 26, 2021</p>
                <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
                <p className='library-block-library-rightBlock-firstLine-rightBox-description-link'>Read Full Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library