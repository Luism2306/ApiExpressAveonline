import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_15Props {
  factura: Factura;
}
export const smsDay_15_html = ({ factura }: sendSmsDay_15Props) => {
  const html = `
 ${factura.cliente} hemos confirmado que el pago de tu factura ${
    factura.factura
  } con vencimiento ${
    factura.fechaVencimineto
  } no se ha efectuado. Te invitamos a ponerte al día con la obligación ${encodeURI(
    `https://cobrocartera.aveonline.co/?factura=${factura.factura.replace(
      " ",
      "-"
    )}`
  )}. Si tienes alguna duda contactanos https://wa.link/eh4uqu Aveonline .
`;
  return html;
};
export const sendSmsDay_15 = async ({ factura }: sendSmsDay_15Props) => {
  const html = smsDay_15_html({ factura });
  await sendSms({
    telefono: factura.telefono,
    html,
  });
};
