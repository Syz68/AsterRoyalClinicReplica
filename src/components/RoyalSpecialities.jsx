import React from 'react'
import './RoyalSpecialities.css'
import { FaStethoscope, FaUserMd, FaBaby, FaTooth, FaFemale, FaBrain, FaChild } from "react-icons/fa";

const specialities = [
  { icon: <FaStethoscope />, title: "Internal Medicine" },
  { icon: <FaUserMd />, title: "Dermatology / Cosmetology" },
  { icon: <FaBaby />, title: "Paediatrics" },
  { icon: <FaTooth />, title: "Dentistry" },
  { icon: <FaFemale />, title: "Gynaecology" },
  { icon: <FaBrain />, title: "Psychiatry" },
  { icon: <FaChild />, title: "Paediatric Dentist" },
];

const RoyalSpecialities = () => (

  <div className='royal-spec-maindiv'>
     <div className='royal-bg-tr'></div>

  <section className="specialities-container">

    <h2 className="specialities-title">Our Specialities</h2>

    <div className="specialities-grid">
      {specialities.map((item, index) => (
        <div className="speciality-item" key={index}>
          <div className="speciality-icon">{item.icon}</div>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  </section>
  </div>
);

export default RoyalSpecialities;
