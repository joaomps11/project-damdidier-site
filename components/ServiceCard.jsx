import Link from "next/link";

export default function ServiceCard({ title, description, items }) {
  return (
    <div className="card service-card">
      <h3>{title}</h3>
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
