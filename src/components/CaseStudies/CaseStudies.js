import React from 'react'
import '../CaseStudies/CaseStudies.css'
import human from '../../assets/Feature Image.png'
import Registered from './Registered/Registered'

const CaseStudies = () => {
  return (
    <>
      <div className='caseStudies-block'>
        <div className='caseStudies-block-img'>
            <img src={human}></img>
        </div>
        <div className='caseStudies-block-text'>
            <p className='caseStudies-block-text-firstPar'>Request Early Access to Get Started</p>
            <h2>The possibilities are beyond your imagination</h2>
            <p className='caseStudies-block-text-secondPar'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p className='caseStudies-block-text-thirdPar'>Request Early Access to Get Started</p>
        </div>
      </div>
      <Registered/>
    </>
  )
}

export default CaseStudies