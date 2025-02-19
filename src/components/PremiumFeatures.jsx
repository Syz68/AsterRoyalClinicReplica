import { FaHeartbeat, FaCar, FaClock, FaCouch, FaCrown } from "react-icons/fa";
import "./PremiumFeatures.css";

const features = [
  { icon: <FaHeartbeat />, title: "Tailored Healthcare Experience" },
  { icon: <FaCar />, title: "Convenient Valet Parking" },
  { icon: <FaClock />, title: "Minimal Waiting Time" },
  { icon: <FaCouch />, title: "Luxurious Waiting Lounge" },
  { icon: <FaCrown />, title: "Royal Treatment" },
];

const PremiumFeatures = () => (
  <section className="features-container">
    <h2 className="features-title">Our Premium Features</h2>
    <div className="features-grid">
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <span>{feature.title}</span>
        </div>
      ))}
    </div>
  </section>
);

export default PremiumFeatures;
