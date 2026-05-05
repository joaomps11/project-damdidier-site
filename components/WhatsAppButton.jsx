export default function WhatsAppButton({ text = "WhatsApp" }) {
  return (
    <a
      className="whatsapp-btn"
      href="https://wa.me/558188677879"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
