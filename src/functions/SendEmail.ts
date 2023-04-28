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
  factura,
  cliente,
  numeroFactura,
  correocliente,
}: SendEmailPayload): Promise<void> {
  try {
    const html = `
    <div style="font-family: 'Open Sans',sans-serif; display:flex;margin:0 auto; justify-content: center !important;">
    <div style="width:600px;border-radius:10px;background:#ffffff;padding-bottom:32px; border-style: solid; border-width: 1px 1px 1px 1px; border-color: #EBEBEB;
        box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 6%);">
        <div
            style="padding-left:0!important;height:12px;background:linear-gradient(296.48deg,#ac24f1 46.11%,#ff585d 97.89%);border-radius:10px 10px 0px 0px ; ">
        </div>
        <div style="padding-left:43px">
            <div>
                <div style="text-align:center;margin-top:28px">
                    <img src="https://ci5.googleusercontent.com/proxy/x0e9U7KINSRr1XLqN5aVwXwodKVG4cdcsvQdG6SqrSKRBIEb_OhmTqzPzWcKLjbFpGzQV-uJyri7RJZc9oQJAdnvyTEWq1fiAkA=s0-d-e1-ft#https://app.aveonline.co/assets/img/mano-onboarding.png"
                        alt="" class="CToWUd" data-bit="iit">
                </div>
                <h1
                    style="font-style:normal;margin-top:26.48px;font-weight:700;font-size:24px;line-height:24px;text-align:center;color:#4a4f54">
                    Hola, ${cliente}</h1>
                <p
                    style="font-style:normal;margin-top:40px;width:518px;height:54px;font-weight:400;font-size:16px;line-height:20px;color:#4a4f54; display: flex; justify-content: center;">
                    Te invitamos a ponerte al día con tu factura ${factura}
                </p>
                <span>Te invitamos a pagar tu factura: ${encodeURI(
                  `https://aveonline-facturas.vercel.app/?factura=${factura.replace(
                    " ",
                    "-"
                  )}`
                )}</span>

                <div style="
                        margin-top: 40px;
                        margin-bottom: 32px;
                        border: 1px solid #dcdcdc;
                        width: 514px"></div>
            </div>
        </div>
        
    </div>
</div>
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

//comentar cuando este produccion datos de prueba
const facturasPrueba: Factura[] = [
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
    telefono: "3206295582",
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

  // Agrega más facturas de prueba aquí...
];

export async function sendEmailsFacturas(): Promise<void> {
  try {
    console.log(sendEmailsFacturas);
    const facturas = facturasPrueba;
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
