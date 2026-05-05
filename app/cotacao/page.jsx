import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Cotacao() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="yellow-line"></span>
            <h1>Faça sua cotação</h1>
          </div>
        </section>

        <section className="section">
          <div className="container cotacao-grid">
            <div className="form-card">
              <h2>Solicitar cotação</h2>
              <p>Campos marcados com * são obrigatórios.</p>

              <form className="form">
                <label>
                  Nome completo *
                  <input type="text" placeholder="Digite seu nome" />
                </label>

                <label>
                  E-mail *
                  <input type="email" placeholder="seu@email.com" />
                </label>

                <label>
                  Telefone / WhatsApp *
                  <input type="text" placeholder="(81) 99999-0000" />
                </label>

                <label>
                  Empresa
                  <input type="text" placeholder="Nome da empresa" />
                </label>

                <label>
                  Tipo de serviço *
                  <select>
                    <option>Seguro de Vida</option>
                    <option>Saúde Empresarial</option>
                    <option>Seguro Auto</option>
                    <option>Seguro Empresarial</option>
                  </select>
                </label>

                <label>
                  Mensagem
                  <textarea placeholder="Descreva sua necessidade"></textarea>
                </label>

                <button type="button">Receber cotação gratuitamente</button>
              </form>
            </div>

            <div className="why-card">
              <h2>Por que fazer sua cotação conosco?</h2>

              <div>
                <h3>Resposta com agilidade</h3>
                <p>
                  Nossa equipe entra em contato para entender sua necessidade e
                  apresentar as opções disponíveis.
                </p>
              </div>

              <div>
                <h3>Melhor custo-benefício</h3>
                <p>
                  Comparamos alternativas para buscar uma solução adequada ao
                  seu perfil.
                </p>
              </div>

              <div>
                <h3>Sem compromisso</h3>
                <p>
                  A cotação é gratuita e você decide se deseja avançar com a
                  contratação.
                </p>
              </div>

              <WhatsAppButton text="Prefiro falar pelo WhatsApp" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
