import axios from "axios";
import { getAllPhone } from "./getAllPhone";
import { Factura, getInvoiceInfo } from "./getInvoiceInfo";


export interface sendSmsProps {
  html: string;
  telefono:string;
}

export async function sendSms({
  telefono,
  html,
}: sendSmsProps): Promise<void> {
  try {
    const bodyTemplate = `
    <div>
      ${html}
    </div>
`;

    const payload = {
      to: telefono,
      body: bodyTemplate,
    };
    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v1/sms/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      }
    );
    console.log(`Mensaje enviado a: ${telefono}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando Mensajes");
  }
}


export interface SendSmsPayload extends Factura {}

export async function sendEmailFacturas({
  nit,
  prefijoFactura,
  cliente,
  telefono,
  numeroFactura,
  correocliente,
}: SendSmsPayload): Promise<void> {
  try {
    const html = `
      <p>Estimado ${cliente} ,</p>
      <p>Le queremos recordar que su facura ${numeroFactura}</p>
      <p>Se encuentra pendiente </p>
      <p>Atentamente,</p>
      <p>El equipo de Aveonline</p>
      <p>El equipo de Aveonline</p>
  `;

    await sendSms({
      telefono: telefono,
      html,
    });
    console.log(`Mensaje enviado a: ${telefono}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando Mensaje");
  }
}


export async function sendSmssFacturas(): Promise<void> {
  try {
    const facturas = await getInvoiceInfo();
    for (const factura of facturas) {
      await sendEmailFacturas({
        ...factura,
      });
    }
    console.log(
      "Todos los correos mensajes han sido enviados exitosamente."
    );
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando mensajes");
  }
}











