import axios from "axios";
import { getAllEmails } from "./getAllEmail";
import { Factura, getInvoiceInfo } from "./getInvoiceInfo";

export interface sendEmailProps {
  html: string;
  email: string;
  subject: string;
}

export async function sendEmail({
  email,
  html,
  subject,
}: sendEmailProps): Promise<void> {
  try {
    const bodyTemplate = `
      <body>
        ${html}
      </body>
  `;

    const payload = {
      to: email,
      subject,
      body: bodyTemplate,
    };
    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v2/email/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Hub-Aveonline": "AVeonline",
        },
      }
    );
    console.log(`Correo electrónico enviado a: ${email}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}

export interface SendEmailPayload extends Factura {}

export async function sendEmailFacturas({
  nit,
  prefijoFactura,
  cliente,
  numeroFactura,
  correocliente,
}: SendEmailPayload): Promise<void> {
  try {
    const html = `
      <p>Estimado ${cliente} ,</p>
      <p>Gracias por su interés en nuestros productos. ${numeroFactura}</p>
      <p>El número de su última factura es</p>
      <p>Atentamente,</p>
      <p>El equipo de Aveonline</p>
  `;

    await sendEmail({
      email: correocliente,
      subject: `Hola ${cliente}`,
      html,
    });
    console.log(`Correo electrónico enviado a: ${correocliente}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}

export async function sendEmailsFacturas(): Promise<void> {
  try {
    const facturas = await getInvoiceInfo();
    for (const factura of facturas) {
      await sendEmailFacturas({
        ...factura,
      });
    }
    console.log(
      "Todos los correos electrónicos han sido enviados exitosamente."
    );
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}
