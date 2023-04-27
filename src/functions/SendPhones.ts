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

const facturasPruebaSms: Factura[] = [
  {
    idEmpresa: 158,
    totalDebito: null,
    pendcastigada: "SI",
    castigada: "SI",
    prefijoFactura: "ST",
    numeroFactura: 6346,
    observacion: "",
    factura: "ST 6346",
    totalFactura: 22680,
    cliente: "Gerardo",
    nit: "1152186540",
    telefono: "573223173104",
    telefono1: "3136817586",
    correocliente: "luigui23062001@gmail.com",
    vencida: "SI",
    fechaFactura: "2017/01/25",
    fechaVencimineto: "2017/02/02",
    diasVencimiento: -2274,
    estadoCliente: "8. Suspendió Operaciones con AVE",
    estadoNuevo: "Juridico",
    saldo: 22680,
    abonos: 0,
    notasCredito: 0,
    AsesorCom: "Yuleidy  Garcia Vasquez",
    notasCreditoAnticipos: 0,
  },
  {
    idEmpresa: 158,
    totalDebito: null,
    pendcastigada: "SI",
    castigada: "NO",
    prefijoFactura: "ST",
    numeroFactura: 6421,
    observacion: "",
    factura: "ST 6421",
    totalFactura: 52920,
    cliente: "Martin",
    nit: "1152186540",
    telefono: "573223173104",
    telefono1: "3136817586",
    correocliente: "luigui23062001@gmail.com",
    vencida: "SI",
    fechaFactura: "2017/02/06",
    fechaVencimineto: "2017/02/14",
    diasVencimiento: -2262,
    estadoCliente: "8. Suspendió Operaciones con AVE",
    estadoNuevo: "Juridico",
    saldo: 52920,
    abonos: 0,
    notasCredito: 0,
    AsesorCom: "Yuleidy  Garcia Vasquez",
    notasCreditoAnticipos: 0,
  },
  // Agrega más facturas de prueba aquí...
];






export async function sendSmssFacturas(): Promise<void> {
  try {
    const facturas = facturasPruebaSms;
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











