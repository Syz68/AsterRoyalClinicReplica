import React from 'react'
import './HeroSectionRoyal.css'
import royallogo from '../assets/royalcliniclogo.png'

const HeroSectionRoyal = () => {
  return (
    <div className='royal-maindiv'>

      <div className='royal-logo'>
        <img src={royallogo} alt="Aster clinic Logo" />
      </div>

      <div className='royal-bannerformcontainer'>
        <h2 className='royal-iframh2'>Request A Callback</h2>
        <iframe
          src="https://asterclinicmern.stldigitaltech.com/form/67b57a1147d6744903041617?redirect_to=https://asterclinicmern.stldigitaltech.com/"
          frameBorder="0"
          className='royal-iframecontainer'
          scrolling='no'
        ></iframe>
      </div>

      <div className="royal-lhs-text">
        <h2><span style={{ color: ' #E4AE2B' }}>Experience The Royal Care</span><br />
          At Aster Royal Clinic Downtown</h2>
      </div>

      {/* mobile view form */}




    </div>
  )
}

export default HeroSectionRoyal