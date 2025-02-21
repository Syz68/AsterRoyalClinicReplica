import React from "react";
import "./StickyScrollButton.css";

const StickyScrollButton = () => {
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
    <div>
      <button className="sticky-scroll-btn pc-royal-btn" onClick={scrollToForm}>
        Book Now
      </button>

      {/* Optional: Mobile-specific button */}
      <button className="sticky-scroll-btn mobile-btn" onClick={scrollToMobileForm}>
        Book Now
      </button>
    </div>
  );
};

export default StickyScrollButton;
