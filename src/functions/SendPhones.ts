import axios from "axios";
import { getAllPhone } from "./getAllPhone";
import { Factura, getInvoiceInfo } from "./getInvoiceInfo";

export interface sendSmsProps {
  html: string;
  telefono: string;
}

export async function sendSms({ telefono, html }: sendSmsProps): Promise<void> {
  try {
    const bodyTemplate = `
 
      ${html}
    
`;

    const payload = {
      to: [telefono],
      body: bodyTemplate,
    };
    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v1/sms/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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

export async function sendSmsFacturas({
  nit,
  prefijoFactura,
  cliente,
  telefono,
  factura,
  numeroFactura,
  correocliente,
}: SendSmsPayload): Promise<void> {
  try {
    const html = `
      Estimado ${cliente} ,Le queremos recordar que su factura ${encodeURI(
      `https://aveonline-facturas.vercel.app/?factura=${factura.replace(
        " ",
        "-"
      )}`
    )}
  `;

    await sendSms({
      telefono: telefono,
      html:`Estimado ${cliente} ,Le queremos recordar que su factura ${encodeURI(
        `https://aveonline-facturas.vercel.app/?factura=${factura.replace(
          " ",
          "-"
        )}`
      )}`,
    });
    console.log(`Mensaje enviado a: ${telefono}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando Mensaje");
  }
}

const facturasPruebaSms: Factura[] = [
  {
    idEmpresa: 23862,
    totalDebito: null,
    pendcastigada: "NO",
    castigada: "NO",
    prefijoFactura: "LO",
    numeroFactura: 35677,
    observacion:
      "Plan : PLAN BASICO- Valor: 30000 (Mensual)<br> Fecha Prox Renovaci&oacute;n: (2023/01/27)",
    factura: "LO 35677",
    totalFactura: 30000,
    cliente: "Breiner Fabian Murillo Romero Breiner Fabian Murillo Romero",
    nit: "1111817484",
    telefono: "573147992263",
    telefono1: "3206295582",
    correocliente: "agudelocjuan@gmail.com",
    vencida: "SI",
    fechaFactura: "2022/12/27",
    fechaVencimineto: "2023/01/04",
    diasVencimiento: -113,
    estadoCliente: "8. Suspendió Operaciones con AVE",
    estadoNuevo: "Cuenta cancelada",
    saldo: 30000,
    abonos: 0,
    notasCredito: 0,
    AsesorCom: "Yuleidy  Garcia Vasquez",
    notasCreditoAnticipos: 0,
  },
];

export async function sendSmssFacturas(): Promise<void> {
  try {
    const facturas = facturasPruebaSms;
    for (const factura of facturas) {
      await sendSmsFacturas({
        ...factura,
      });
    }
    console.log("Todos los correos mensajes han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando mensajes");
  }
}
