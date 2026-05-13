import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      nome,
      email,
      telefone,
      empresa,
      servico,
      mensagem,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_DESTINO,
      subject: "Nova solicitação de cotação",
      html: `
        <h2>Nova cotação recebida</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}