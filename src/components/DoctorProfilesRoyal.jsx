import { useState, useEffect } from "react";
import "./DoctorProfilesRoyal.css";
import RequestCallbackForm from "./RequestCallbackForm";

const doctors = [
    { name: "Dr. Mohammadreza Razmavar", degrees: "MBBS, MD", specialty: "Dermatology / Cosmetology", image: "https://www.asterclinic.ae/assets/Asset-8@3x-ivOTnEQe.png" },
    { name: "Dr. Nishant Khurana", degrees: "BDS, MDS", specialty: "Dentistry", image: "https://www.asterclinic.ae/assets/Asset-9_3x-removebg-preview-BPhg0xM1.png" },
    { name: "Dr. Swati Prasad", degrees: "MBBS, MD", specialty: "Internal Medicine", image: "https://www.asterclinic.ae/assets/Mask-group-21-D5xTVxbv.png" },
    { name: "Dr. Jayanti Malik", degrees: "MBBS, MD", specialty: "Dermatology / Cosmetology", image: "https://www.asterclinic.ae/assets/Group-1-3-BNOOUNkl.png" },
    { name: "Dr. Sudha Rao", degrees: "MBBS, MD, MGCP, FWACP", specialty: "Paediatrics", image: "https://www.asterclinic.ae/assets/Group-1-2-1-BklTF2rC.png" },
    { name: "Dr. Salman Kareem", degrees: "MBBS, MD", specialty: "Psychiatry", image: "https://www.asterclinic.ae/assets/Group-107-1-DxzFiTJN.png" },
    { name: "Dr. Shikha Garg", degrees: "MBBS, MD", specialty: "Gynaecology", image: "https://www.asterclinic.ae/assets/Untitled-C0eDa1YE.png" },
    { name: "Dr. Sana Patel", degrees: "M.D.S, B.D.S, M.A", specialty: "Paediatric Dentistry", image: "https://www.asterclinic.ae/assets/Untitled-design-3-BnKkluiO.png" },
];

const DoctorProfilesRoyal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visibleDoctors, setVisibleDoctors] = useState(4);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = "hidden"; // Prevent background scroll
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = "auto"; // Restore scrolling
    };

    const toggleDoctors = () => {
        setVisibleDoctors((prev) => (prev === 4 ? doctors.length : 4));
    };

    // Close modal on escape key press
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section className="doctor-section-royal">
            <div className="royal-bg-tt"></div>
            <div className="royal-bg-ttt"></div>

            <h2 className="section-title">Our Expert Doctors</h2>

            <div className="doctor-grid">
                {doctors.slice(0, visibleDoctors).map((doctor, index) => (
                    <div className="doctor-card" key={index}>
                        <div className="doctor-image">
                            <img src={doctor.image} alt={doctor.name} className="royal-doctor-img" />
                        </div>
                        <div className="doctor-info">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-degrees">{doctor.degrees}</p>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <button className="appointment-btn" onClick={openModal} onTouchEnd={openModal}>
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="more-btn-container">
                <button className="more-btn" onClick={toggleDoctors}>
                    {visibleDoctors === 4 ? "View More" : "Show Less"}
                </button>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>&times;</button>
                        <h3>Premium Healthcare, Personalized for You</h3>
                        <RequestCallbackForm />
                    </div>
                </div>
            )}
        </section>
    );
};

export default DoctorProfilesRoyal;
