import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_MounthProps {
  factura: Factura;
}
export const smsDay_Mounth_html = ({ factura }: sendSmsDay_MounthProps) => {
  const html = `
 ${factura.cliente} nuevamente te notificamos que la factura ${factura.factura} por valor ${factura.saldo} está pendiente de pago presentando una demora superior a 30 días. Para acceder a los medios de pago visita ${encodeURI(
  `https://cobrocartera.aveonline.co/?factura=${factura.factura.replace(
    " ",
    "-"
  )}`
)} ,Es necesario que canceles tu obligación de manera inmediata para que evites el traslado de tu deuda a cobranza prejurídica. Aveonline. Si tienes alguna duda contactanos https://wa.link/eh4uqu Aveonline.
`;
  return html;
};
export const sendSmsDay_Mounth = async ({
  factura,
}: sendSmsDay_MounthProps) => {
  const html = smsDay_Mounth_html({ factura });
  await sendSms({
    telefono: factura.telefono,
    html,
  });
};
