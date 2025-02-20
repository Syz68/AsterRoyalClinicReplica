import React from "react";
import "./EnquireNowRoyal.css";

const EnquireNowRoyal = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("appointment-form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMobileForm = () => {
    const mobileFormSection = document.getElementById("mobile-appointment-form-section");
    if (mobileFormSection) {
      mobileFormSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="royal-cta-section">
      <h2 className="royal-cta-heading">Need More Information?</h2>
      <p className="royal-cta-subtext">
        Our experts are here to assist you. Reach out and book your appointment today!
      </p>
      <button className="royal-cta-button pc-view" onClick={scrollToForm}>
        Enquire Now
      </button>
      <button className="royal-cta-button mobile-view" onClick={scrollToMobileForm}>
        Enquire Now
      </button>
    </section>
  );
};

export default EnquireNowRoyal;