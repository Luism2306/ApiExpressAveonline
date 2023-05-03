import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_15Props {
  factura: Factura;
}
export const emailDay_15_html = ({ factura }: sendSmsDay_15Props) => {
  const html = `
 ${factura.cliente} hemos confirmado que el pago de tu factura ${
    factura.factura
  } con vencimiento ${
    factura.fechaVencimineto
  } no se ha efectuado. Te invitamos a ponerte al día con la obligación ${encodeURI(
    `https://aveonline-facturas.vercel.app/?factura=${factura.factura.replace(
      " ",
      "-"
    )}`
  )}. Si tienes alguna duda <a src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos Aveonline</a>
`;
  return html;
};
export const sendSmsDay_15 = async ({ factura }: sendSmsDay_15Props) => {
  const html = emailDay_15_html({ factura });
  await sendSms({
    to: [factura.telefono],
    body: html,
  });
};
