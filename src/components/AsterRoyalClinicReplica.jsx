import React from 'react'
import HeroSectionRoyal from './HeroSectionRoyal'
import MobileViewFormRoyal from './MobileViewFormRoyal'
import PremiumFeatures from './PremiumFeatures'
import DoctorProfilesRoyal from './DoctorProfilesRoyal'
import InsuranceSectionRoyal from './InsuranceSectionRoyal'
import VideoSectionRoyal from './VideoSectionRoyal'
import RoyalClinicFAQ from './RoyalClinicFAQ'
import EnquireNowRoyal from './EnquireNowRoyal'
import RoyalGridLayout from './RoyalGridLayout'
import StickyScrollButton from "./StickyScrollButton";



// golden color - #E4AE2B

const AsterRoyalClinicReplica = () => {
  return (
    <div style={{ backgroundColor: '#104C90', height: '100%', width: '100%' }}>

      <HeroSectionRoyal/>
      <MobileViewFormRoyal/>
      <RoyalGridLayout/>
      <PremiumFeatures/>
      <DoctorProfilesRoyal/>
      <InsuranceSectionRoyal/>
      <VideoSectionRoyal/>
      <RoyalClinicFAQ/>
      <EnquireNowRoyal/>
      <StickyScrollButton/> 
    </div>
  )
}

export default AsterRoyalClinicReplica