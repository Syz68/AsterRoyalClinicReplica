import { useState } from "react";
import "./RequestCallbackForm.css"; // Importing the CSS file

export default function RequestCallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    speciality: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const specialities = [
    "Internal Medicine",
    "Dermatology / Cosmetology",
    "Paediatrics",
    "Dentistry",
    "Gynaecology",
    "Psychiatry",
    "Paediatric Dentist",
    "Others",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
    }

    if (!formData.mobile.trim()) {
      errors.mobile = "Please enter your mobile number";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.speciality) {
      errors.speciality = "Please select a speciality";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join("\n"));
      return;
    }

    setIsSubmitting(true);

    // Create a new object with the form data, replacing "speciality" with "location"
    const dataToSend = {
      ...formData,
      location: formData.speciality,
    };
    delete dataToSend.speciality;

    const queryString = new URLSearchParams(dataToSend).toString();
    const webhookURL = `https://script.google.com/macros/s/AKfycbygdZrVAA4FWkwunAo4JLehGn9_EDUXKS0_CALB2swwndrbvUEhaPFulout6NXZLnLqag/exec?${queryString}`;

    try {
      const response = await fetch(webhookURL, { method: "GET" });

      if (response.ok) {
        setFormData({ name: "", mobile: "", speciality: "" });
        setSuccessMessage("Form submitted successfully!");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      {/* <h2 className="form-heading">Request A Callback</h2> */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="form-input"
        required
      />
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile Number"
        className="form-input"
        pattern="[0-9]{10}"
        title="Please enter a valid 10-digit mobile number"
        required
      />
      <select
        name="speciality"
        value={formData.speciality}
        onChange={handleChange}
        className="form-input"
        required
      >
        <option value="" disabled selected>
          Select Speciality
        </option>
        {specialities.map((spec) => (
          <option key={spec} value={spec}>
            {spec}
          </option>
        ))}
      </select>
      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
}