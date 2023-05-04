import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_MonthHalfProps {
  factura: Factura;
}
export const smsDay_MonthHalf_html = ({
  factura,
}: sendSmsDay_MonthHalfProps) => {
  const html = `
  ${factura.cliente} No hemos recibido el pago de tu factura ${factura.factura} por valor ${factura.saldo} que presenta una mora de más de 45 días. Si no confirmamos el pago de tu obligación el día de hoy, tu caso será direccionado al departamento de cobranza prejurídica y de ser necesario jurídica donde tendrás entendimiento con nuestros asesores legales. ¡Evíta más gastos! AveOnline. Si tienes alguna duda contactanos https://wa.link/eh4uqu Aveonline.
`;
  return html;
};
export const sendSmsDay_MonthHalf = async ({
  factura,
}: sendSmsDay_MonthHalfProps) => {
  const html = smsDay_MonthHalf_html({ factura });
  await sendSms({
    telefono: factura.telefono,
    html,
  });
};
