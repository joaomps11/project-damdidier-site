import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Sobre() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="yellow-line"></span>
            <h1>Sobre a Damdidier</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Quem somos</h2>
            <p className="section-text">
              A Damdidier atua no segmento de seguros e benefícios corporativos,
              oferecendo atendimento consultivo para pessoas, famílias e
              empresas que buscam proteção, tranquilidade e soluções adequadas
              às suas necessidades.
            </p>

            <p className="section-text">
              Nosso objetivo é simplificar o processo de escolha e contratação
              de seguros, aproximando o cliente das melhores alternativas do
              mercado com clareza, responsabilidade e suporte especializado.
            </p>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Nossos diferenciais</h2>

            <div className="cards three">
              <div className="card">
                <h3>Atendimento consultivo</h3>
                <p>
                  Entendemos a necessidade de cada cliente antes de recomendar
                  uma solução.
                </p>
              </div>

              <div className="card">
                <h3>Parceiros qualificados</h3>
                <p>
                  Trabalhamos com opções de seguradoras e operadoras
                  reconhecidas no mercado.
                </p>
              </div>

              <div className="card">
                <h3>Gestão digital</h3>
                <p>
                  Processo simples para solicitação de cotações e acompanhamento
                  do atendimento.
                </p>
              </div>

              <div className="card">
                <h3>Renovação garantida</h3>
                <p>
                  Acompanhamento na renovação para manter sua proteção sempre
                  atualizada.
                </p>
              </div>

              <div className="card">
                <h3>Compromisso com dados</h3>
                <p>
                  Tratamos as informações dos clientes com responsabilidade e
                  segurança.
                </p>
              </div>

              <div className="card">
                <h3>Suporte dedicado</h3>
                <p>
                  Atendimento próximo para orientar o cliente antes, durante e
                  depois da contratação.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta">
          <div className="container">
            <h2>Quer conhecer mais sobre nosso trabalho?</h2>
            <div className="cta-buttons">
              <Link href="/cotacao" className="btn-yellow">
                Falar com especialista
              </Link>
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
