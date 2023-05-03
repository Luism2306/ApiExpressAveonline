import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_MonthHalfProps {
  factura: Factura;
}
export const emailDay_MonthHalf_html = ({
  factura,
}: sendSmsDay_MonthHalfProps) => {
  const html = `
  ${factura.cliente} No hemos recibido el pago de tu factura ${factura.factura} por valor ${factura.saldo} que presenta una mora de más de 45 días. Si no confirmamos el pago de tu obligación el día de hoy, tu caso será direccionado al departamento de cobranza prejurídica y de ser necesario jurídica donde tendrás entendimiento con nuestros asesores legales. ¡Evíta más gastos! AveOnline. Si tienes alguna duda contactanos https://api.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n Aveonline.
`;
  return html;
};
export const sendSmsDay_MonthHalf = async ({
  factura,
}: sendSmsDay_MonthHalfProps) => {
  const html = emailDay_MonthHalf_html({ factura });
  await sendSms({
    to: [factura.telefono],
    body: html,
  });
};
