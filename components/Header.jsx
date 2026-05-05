import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">
          <span>D</span>
          Damdidier
        </Link>

        <nav className="menu">
          <Link href="/seguros">Seguros</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/cotacao">Contato</Link>
        </nav>

        <Link href="/cotacao" className="btn-yellow">
          Fazer Cotação
        </Link>
      </div>
    </header>
  );
}
