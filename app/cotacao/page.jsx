"use client";

import { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Cotacao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    servico: "Seguro de Vida",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/cotacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Cotação enviada com sucesso!");

        setFormData({
          nome: "",
          email: "",
          telefone: "",
          empresa: "",
          servico: "Seguro de Vida",
          mensagem: "",
        });
      } else {
        alert("Erro ao enviar cotação.");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao enviar cotação.");
    }

    setLoading(false);
  }

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

              <form className="form" onSubmit={handleSubmit}>
                <label>
                  Nome completo *
                  <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  E-mail *
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Telefone / WhatsApp *
                  <input
                    type="text"
                    name="telefone"
                    placeholder="(81) 99999-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Empresa
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nome da empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Tipo de serviço *
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                  >
                    <option>Seguro de Vida</option>
                    <option>Saúde Empresarial</option>
                    <option>Seguro Auto</option>
                    <option>Seguro Empresarial</option>
                  </select>
                </label>

                <label>
                  Mensagem
                  <textarea
                    name="mensagem"
                    placeholder="Descreva sua necessidade"
                    value={formData.mensagem}
                    onChange={handleChange}
                  ></textarea>
                </label>

                <button type="submit" disabled={loading}>
                  {loading
                    ? "Enviando..."
                    : "Receber cotação gratuitamente"}
                </button>
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