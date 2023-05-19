import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { sendEmail, sendEmailProps } from "./sendEmails";
import { sendWhatsappIfDateIsLessByDays } from "./sendWhatsappIfDateIsLessByDays";
import { generarInformeHtml2 } from "./generarInformeHtml2";
import { sendSmsIfDateIsLessByDays } from "./sendSmsIfDateIsLessByDays";

export interface SendWhatsappPayload  {
  facturas:Factura[]
}

export async function sendWhatsappFacturas({facturas}: SendWhatsappPayload): Promise<void> {
  for (const factura of facturas) {
    await sendWhatsappIfDateIsLessByDays({factura})
  }
}
export async function sendWhatsappFacturasAveonline(): Promise<void> {
  const facturas = await getInvoiceInfo();
  const whatsappEnviados: { telefono: string, datos: any }[] = [];

  for (const factura of facturas) {
    try {
      await sendWhatsappIfDateIsLessByDays({ factura });
      whatsappEnviados.push({ telefono: factura.telefono, datos: factura.factura });
    } catch (error) {
      console.error(`Error enviando mensaje de WhatsApp: ${error}`);
      // Puedes agregar aquí la lógica de manejo del error, si es necesario
      // Por ejemplo, puedes registrar el error en un registro o notificarlo de alguna manera
      continue; // Continuar con el siguiente mensaje de WhatsApp en caso de error
    }
  }
  

  // Enviar el informe por correo electrónico
  const informeHTML = generarInformeHtml2(whatsappEnviados); // Genera el contenido HTML del informe

  // Utiliza la función sendEmail para enviar el informe a tu correo personal
  const informeProps: sendEmailProps = {
    email: "luigui23062001@gmail.com",
    html: informeHTML,
    subject: "Informe de envíos de WhatsApp",
  };

  await sendEmail(informeProps);
}

export async function sendWhatsappFacturasPruebas(): Promise<void> {
  const facturas : Factura[] = [
    {
      nit: "123456789-0",
      prefijoFactura: "LO",
      factura: "LO 35677",
      cliente: "Luis Miguel",
      numeroFactura: 35677,
      saldo: 30000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/16",
      telefono:"573223173104",
    },
  ];
  await sendWhatsappFacturas({facturas})
}


