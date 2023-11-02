import React from 'react';
import '../Library/Library.css';
import firstPost from '../../assets/Rectangle 22-4.png'
import secondPost from '../../assets/Rectangle 22.png'

const Library = () => {
  return (
    <div className='library-block'>
      <div className='library-block-titleBlock'>
        <p>A lot is happening, We are blogging about it.</p>
      </div>
      <div className='library-block-library'>
        <div className='library-block-library-firstPost'>
          <img src={firstPost}></img>
          <div className='library-block-library-firstPost-description'>
            <p className='library-block-library-firstPost-description-date'>Sep 26, 2021</p>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <p className='library-block-library-firstPost-description-date-link'>Read Full Article</p>
          </div>
        </div>
        
        <div className='library-block-library-secondBlockPost'>
          <div className='library-block-library-secondBlockPost-secondPost'>
            <img src={secondPost}></img>
            <div className='library-block-library-secondBlockPost-description'>
              <p className='library-block-library-secondBlockPost-description-date'>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <p className='library-block-library-secondBlockPost-description-date-link'>Read Full Article</p>
            </div>
          </div>
          <div className='library-block-library-secondBlockPost-thirdPost'></div>
          <div className='library-block-library-secondBlockPost-fourthPost'></div>
          <div className='library-block-library-secondBlockPost-fifthPost'></div>
        </div>
      </div>
    </div>
  )
}

export default Library