import React from 'react'
import './HeroSectionRoyal.css'
import RequestCallbackForm from "./RequestCallbackForm";

const HeroSectionRoyal = () => {
  return (
    <div className='royal-maindiv'>

      <div className='royal-bannerformcontainer' id='appointment-form-section'>
        <h2 className='royal-iframh2'>Request A Callback</h2>

        <RequestCallbackForm />


        {/* <iframe
          src="https://asterclinicmern.stldigitaltech.com/form/67b57a1147d6744903041617?redirect_to=https://asterclinicmern.stldigitaltech.com/"
          frameBorder="0"
          className='royal-iframecontainer'
          scrolling='no'
        ></iframe> */}
      </div>

    </div>
  )
}

export default HeroSectionRoyal