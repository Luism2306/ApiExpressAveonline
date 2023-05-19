import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { sendEmailIfDateIsLessByDays } from "./sendEmailIfDateIsLessByDays";
import { sendEmail, sendEmailProps } from "./sendEmails";
import {generarInformeHtml} from "./generarInformeHtml"

export interface SendEmailPayload  {
  facturas:Factura[]
}

export async function sendEmailFacturas({facturas}: SendEmailPayload): Promise<void> {
  for (const factura of facturas) {
    await sendEmailIfDateIsLessByDays({factura})
  }
}
export async function sendEmailFacturasAveonline(): Promise<void> {
  const facturas = await getInvoiceInfo();
  const correosEnviados: { email: string, datos: any }[] = [];

  for (const factura of facturas) {
    try {
      await sendEmailIfDateIsLessByDays({ factura });
      correosEnviados.push({ email: factura.correocliente, datos: factura.factura });
    } catch (error) {
      console.error(`Error enviando correo electrónico: ${error}`);
     
      continue; 
    }
  }
 
  const informeHTML = generarInformeHtml(correosEnviados); 

 
  const informeProps: sendEmailProps = {
    email: "luigui23062001@gmail.com",
    html: informeHTML,
    subject: "Informe de correos enviados",
  };

  await sendEmail(informeProps);
}



export async function sendEmailFacturasPruebas(): Promise<void> {
  const facturas : Factura[] = [
    {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "LO 35677",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/12",
      telefono:"573127445632",
    }
   
  ];
  await sendEmailFacturas({facturas})
}


