import { useState } from "react";
import "./DoctorProfilesRoyal.css";

const doctors = [
    {
        name: "Dr. Mohammadreza Razmavar",
        degrees: "MBBS, MD",
        specialty: "Dermatology / Cosmetology",
        image: "https://www.asterclinic.ae/assets/Asset-8@3x-ivOTnEQe.png",
    },
    {
        name: "Dr. Nishant Khurana",
        degrees: "BDS, MDS",
        specialty: "Dentistry",
        image: "https://www.asterclinic.ae/assets/Asset-9_3x-removebg-preview-BPhg0xM1.png",
    },
    {
        name: "Dr. Swati Prasad",
        degrees: "MBBS, MD",
        specialty: "Internal Medicine",
        image: "https://www.asterclinic.ae/assets/Mask-group-21-D5xTVxbv.png",
    },
    {
        name: "Dr. Jayanti Malik",
        degrees: "MBBS, MD",
        specialty: "Dermatology / Cosmetology",
        image: "https://www.asterclinic.ae/assets/Group-1-3-BNOOUNkl.png",
    },
    {
        name: "Dr. Sudha Rao",
        degrees: "MBBS, MD, MGCP, FWACP",
        specialty: "Paediatrics",
        image: "https://www.asterclinic.ae/assets/Group-1-2-1-BklTF2rC.png",
    },
    {
        name: "Dr. Salman Kareem",
        degrees: "MBBS, MD",
        specialty: "Psychiatry",
        image: "https://www.asterclinic.ae/assets/Group-107-1-DxzFiTJN.png",
    },
    {
        name: "Dr. Shikha Garg",
        degrees: "MBBS, MD",
        specialty: "Gynaecology",
        image: "https://www.asterclinic.ae/assets/Untitled-C0eDa1YE.png",
    },
    {
        name: "Dr. Sana Patel",
        degrees: "M.D.S, B.D.S, M.A",
        specialty: "Paediatric Dentistry",
        image: "https://www.asterclinic.ae/assets/Untitled-design-3-BnKkluiO.png",
    },
];

const DoctorProfilesRoyal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="doctor-section-royal">
            <div className="royal-bg-tt"></div>
            <div className="royal-bg-ttt"></div>

            <h2 className="section-title">Our Expert Doctors</h2>
            <div className="doctor-grid">
                {doctors.map((doctor, index) => (
                    <div className="doctor-card" key={index}>
                        <div className="doctor-image">
                            <img src={doctor.image} alt={doctor.name} />
                        </div>
                        <div className="doctor-info">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-degrees">{doctor.degrees}</p>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <button className="appointment-btn" onClick={openModal}>
                                Book An Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>&times;</button>
                        <h3>Request A Callback</h3>
                        <iframe
                            src="https://asterclinicmern.stldigitaltech.com/form/67b57a1147d6744903041617?redirect_to=https://asterclinicmern.stldigitaltech.com/"
                            title="Appointment Form"
                            width="100%"
                            height="500px"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default DoctorProfilesRoyal;
