import React from 'react'
import HeroSectionRoyal from './HeroSectionRoyal'
import MobileViewFormRoyal from './MobileViewFormRoyal'
import ContentSectionRoyal from './ContentSectionRoyal'
import RoyalSpecialities from './RoyalSpecialities'
import PremiumFeatures from './PremiumFeatures'


// golden color - #E4AE2B

const AsterRoyalClinicReplica = () => {
  return (
    <div style={{ backgroundColor: '#104C90', height: '100%', width: '100%' }}>

      {/* here is all the component */}

      <HeroSectionRoyal/>
      <MobileViewFormRoyal/>
      <ContentSectionRoyal/>
      <RoyalSpecialities/>
      <PremiumFeatures/>

    </div>
  )
}

export default AsterRoyalClinicReplica