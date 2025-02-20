import React from 'react'
import './MobileViewFormRoyal.css'

const MobileViewFormRoyal = () => {
  return (
      <div className="add-mobileview-formcontainer add-mobileview-only" id='mobile-appointment-form-section'>
        <h2 className="add-mobileview-heading">Request A Callback</h2>
        <iframe
          src="https://asterclinicmern.stldigitaltech.com/form/67b57a1147d6744903041617?redirect_to=https://asterclinicmern.stldigitaltech.com/"
          frameBorder="0"
          className="add-mobileview-iframe"
          scrolling="no"
          title="Request Callback Form"
        ></iframe>
      </div>

 
  )
}

export default MobileViewFormRoyal