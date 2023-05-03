import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_MounthProps {
  factura: Factura;
}
export const emailDay_Mounth_html = ({ factura }: sendSmsDay_MounthProps) => {
  const html = `
 ${factura.cliente} nuevamente te notificamos que la factura ${factura.factura} por valor ${factura.saldo} está pendiente de pago presentando una demora superior a 30 días. Es necesario que canceles tu obligación de manera inmediata para que evites el traslado de tu deuda a cobranza prejurídica. Aveonline. Si tienes alguna duda contactanos https://api.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n  Aveonline.
`;
  return html;
};
export const sendSmsDay_Mounth = async ({
  factura,
}: sendSmsDay_MounthProps) => {
  const html = emailDay_Mounth_html({ factura });
  await sendSms({
    to: [factura.telefono],
    body: html,
  });
};
