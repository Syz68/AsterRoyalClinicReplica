import React from 'react';
import ContentSectionRoyal from './ContentSectionRoyal';
import RoyalSpecialities from './RoyalSpecialities';
import './RoyalGridLayout.css'; // New CSS for the layout

const RoyalGridLayout = () => {
  return (
    <div className="royal-grid-container">
      <div className="grid-item">
        <ContentSectionRoyal />
      </div>
      <div className="grid-item">
        <RoyalSpecialities />
      </div>
    </div>
  );
};

export default RoyalGridLayout;
