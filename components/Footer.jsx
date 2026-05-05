import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Damdidier</h3>
          <p>Seguros e Benefícios Corporativos</p>
        </div>

        <div>
          <h4>Serviços</h4>
          <Link href="/seguros">Seguro de Vida</Link>
          <Link href="/seguros">Saúde Empresarial</Link>
          <Link href="/seguros">Seguro Auto</Link>
          <Link href="/seguros">Seguro Empresarial</Link>
        </div>

        <div>
          <h4>Empresa</h4>
          <Link href="/sobre">Sobre nós</Link>
          <Link href="/cotacao">Contato</Link>
          <Link href="/cotacao">Solicitar cotação</Link>
        </div>

        <div>
          <h4>Contato</h4>
          <p>atendimento@damdidier.com.br</p>
          <p>Recife, PE</p>
          <WhatsAppButton />
        </div>
      </div>

      <div className="container copyright">
        © 2026 Damdidier. Todos os direitos reservados.
      </div>
    </footer>
  );
}
