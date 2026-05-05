import Link from "next/link";

import {
  FaHeart,
  FaCar,
  FaBuilding,
  FaBriefcaseMedical,
} from "react-icons/fa";

export default function ServiceCard({ title, description, items }) {
  const getIcon = () => {
    if (title.includes("Vida"))
      return <FaHeart className="service-icon" />;

    if (title.includes("Auto"))
      return <FaCar className="service-icon" />;

    if (title.includes("Empresarial"))
      return <FaBuilding className="service-icon" />;

    if (title.includes("Saúde"))
      return <FaBriefcaseMedical className="service-icon" />;

    return null;
  };

  return (
    <div className="card service-card">
      <div className="service-top">
        {getIcon()}
        <h3>{title}</h3>
      </div>

      <p>{description}</p>

      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <Link href="/cotacao" className="small-btn">
        Simular cotação
      </Link>
    </div>
  );
}
