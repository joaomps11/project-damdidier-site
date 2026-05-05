export default function WhatsAppButton({ text = "WhatsApp" }) {
  return (
    <a
      className="whatsapp-btn"
      href="https://wa.me/5581999990000"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
