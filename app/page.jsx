import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-content">
            <div>
              <span className="tag">Seguros</span>
              <h1>Proteção completa para você e sua família</h1>
              <p>
                Seguros de vida, saúde, auto e empresarial com atendimento
                consultivo e soluções pensadas para cada necessidade.
              </p>

              <Link href="/seguros" className="btn-yellow">
                Ver seguros
              </Link>
            </div>

            <div className="quote-box">
              <h3>Faça sua cotação agora</h3>
              <p>Receba uma proposta personalizada com nossa equipe.</p>
              <Link href="/cotacao" className="btn-yellow full">
                Solicitar cotação grátis
              </Link>
            </div>
          </div>
        </section>

        <section className="info-bar">
          <div className="container info-grid">
            <div>
              <strong>Atendimento consultivo</strong>
              <p>Orientação para escolher o seguro ideal.</p>
            </div>
            <div>
              <strong>Soluções personalizadas</strong>
              <p>Planos para pessoas físicas e empresas.</p>
            </div>
            <div>
              <strong>Suporte próximo</strong>
              <p>Acompanhamento antes e depois da contratação.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Soluções completas para você e sua empresa</h2>
            <p className="section-text">
              A Damdidier conecta clientes às melhores opções de seguros e
              benefícios, buscando proteção, praticidade e custo-benefício.
            </p>

            <div className="cards">
              <ServiceCard
                title="Seguro de Vida"
                description="Proteção financeira para sua família em momentos difíceis."
              />
              <ServiceCard
                title="Saúde Empresarial"
                description="Planos de saúde corporativos para empresas e colaboradores."
              />
              <ServiceCard
                title="Seguro Auto"
                description="Proteção para veículos contra roubo, colisão e terceiros."
              />
              <ServiceCard
                title="Seguro Empresarial"
                description="Coberturas para proteger patrimônio, operação e estrutura do negócio."
              />
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <h2>Como funciona</h2>

            <div className="steps">
              <div>
                <span>01</span>
                <h3>Fale conosco</h3>
                <p>
                  Entre em contato pelo WhatsApp ou formulário e informe sua
                  necessidade.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Receba a proposta</h3>
                <p>
                  Nossa equipe analisa seu perfil e apresenta opções adequadas.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Contrate com segurança</h3>
                <p>
                  Você escolhe a melhor opção e recebe suporte durante o
                  processo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
