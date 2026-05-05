import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServiceCard from "../../components/ServiceCard";

export default function Seguros() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="yellow-line"></span>
            <h1>Seguros para cada momento da sua vida</h1>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Nossos seguros</h2>

            <div className="cards two">
              <ServiceCard
                title="Seguro de Vida"
                description="Proteção financeira para sua família em casos de invalidez, doenças graves ou falecimento."
                items={[
                  "Cobertura por morte",
                  "Invalidez permanente",
                  "Doenças graves",
                ]}
              />

              <ServiceCard
                title="Saúde Empresarial"
                description="Planos de saúde com ampla rede credenciada para você e seus colaboradores."
                items={[
                  "Rede nacional credenciada",
                  "Cobertura ambulatorial",
                  "Internação hospitalar",
                ]}
              />

              <ServiceCard
                title="Seguro Auto"
                description="Proteção completa para seu veículo contra roubo, colisão, acidentes e danos a terceiros."
                items={[
                  "Roubo e furto",
                  "Colisão e capotamento",
                  "Danos a terceiros",
                ]}
              />

              <ServiceCard
                title="Seguro Empresarial"
                description="Proteção patrimonial completa para seu negócio com coberturas personalizadas."
                items={[
                  "Incêndio e explosão",
                  "Responsabilidade civil",
                  "Roubo de equipamentos",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <h2>Por que escolher a Damdidier?</h2>

            <div className="benefits">
              <div>
                <h3>Agilidade</h3>
                <p>Atendimento rápido e direcionado.</p>
              </div>
              <div>
                <h3>Parceria</h3>
                <p>Apoio para encontrar a melhor solução.</p>
              </div>
              <div>
                <h3>Segurança</h3>
                <p>Contratação com orientação e clareza.</p>
              </div>
              <div>
                <h3>Suporte</h3>
                <p>Atendimento humanizado durante todo o processo.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
