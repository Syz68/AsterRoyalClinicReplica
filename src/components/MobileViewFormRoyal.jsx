import React from 'react'
import './MobileViewFormRoyal.css'
import RequestCallbackForm from "./RequestCallbackForm"; 

const MobileViewFormRoyal = () => {
  return (
      <div className="add-mobileview-formcontainer add-mobileview-only" id='mobile-appointment-form-section'>
        <h2 className="add-mobileview-heading">Request A Callback</h2>
        <RequestCallbackForm />

      </div>

 
  )
}

export default MobileViewFormRoyal