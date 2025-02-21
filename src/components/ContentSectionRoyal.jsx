import React from 'react'
import './ContentSectionRoyal.css'
import { FaMapMarkerAlt, FaUserMd, FaHeartbeat, FaUsers, FaShieldAlt, FaFlask } from "react-icons/fa";

const features = [
    { icon: <FaMapMarkerAlt />, text: "Prime Location & Easy Access" },
    { icon: <FaUserMd />, text: "Comprehensive Medical Care" },
    { icon: <FaHeartbeat />, text: "Patient-Centered Approach" },
    { icon: <FaUsers />, text: "Expert & Compassionate Team" },
    { icon: <FaShieldAlt />, text: "Commitment to Preventive Health" },
    { icon: <FaFlask />, text: "Cutting-Edge Treatments" }
];

const ContentSectionRoyal = () => {
    return (
        <div className='royal-choose-maindiv'>
        {/* <div className='royal-bg-tl'></div> */}
        
        <div className="why-choose-container">
            
            <h2 className="why-choose-title">Why Choose Aster Royal Clinic, Downtown?</h2>
            <div className="why-choose-grid">
                {features.map((feature, index) => (
                    <div className="why-choose-item" key={index}>
                        <span className="why-choose-icon">{feature.icon}</span>
                        <span className="why-choose-text">{feature.text}</span>
                    </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default ContentSectionRoyal