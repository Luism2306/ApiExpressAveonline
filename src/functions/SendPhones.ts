import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { sendEmail, sendEmailProps } from "./sendEmails";
import { sendSmsIfDateIsLessByDays } from "./sendSmsIfDateIsLessByDays";
import { generarInformeHtml1 } from "./generarInformeHtml1";

export interface SendSmsPayload  {
  facturas:Factura[]
}

export async function sendSmsFacturas({facturas}: SendSmsPayload): Promise<void> {
  for (const factura of facturas) {
    await sendSmsIfDateIsLessByDays({factura})
  }
}
export async function sendSmsFacturasAveonline(): Promise<void> {
  const facturas = await getInvoiceInfo();
  const smsEnviados: { telefono: string, datos: any }[] = [];

  for (const factura of facturas) {
    try {
      await sendSmsIfDateIsLessByDays({ factura });
      smsEnviados.push({ telefono: factura.telefono, datos: factura.factura });
    } catch (error) {
      console.error(`Error enviando SMS: ${error}`);
      // Puedes agregar aquí la lógica de manejo del error, si es necesario
      // Por ejemplo, puedes registrar el error en un registro o notificarlo de alguna manera
      continue; // Continuar con el siguiente mensaje de SMS en caso de error
    }
  }
  

  // Enviar el informe por correo electrónico
  const informeHTML = generarInformeHtml1(smsEnviados); // Genera el contenido HTML del informe

  // Utiliza la función sendEmail para enviar el informe a tu correo personal
  const informeProps: sendEmailProps = {
    email: "luigui23062001@gmail.com",
    html: informeHTML,
    subject: "Informe de envíos de SMS",
  };

  await sendEmail(informeProps);
}

export async function sendSmsFacturasPruebas(): Promise<void> {
  const facturas : Factura[] = [
    {
      nit: "123456789-0",
      prefijoFactura: "LO",
      factura: "LO 35677",
      cliente: "Breiner Fabian Murillo Romero",
      numeroFactura: 35677,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/16",
      telefono:"573223173104",
    },
  ];
  await sendSmsFacturas({facturas})
}


