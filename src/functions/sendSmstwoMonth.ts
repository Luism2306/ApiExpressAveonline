import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_TwoMonthProps {
  factura: Factura;
}
export const smsDay_TwoMonth_html = ({
  factura,
}: sendSmsDay_TwoMonthProps) => {
  const html = `
  Aveonline te informa que ante el incumplimiento de pago de su factura ${factura.factura} con más de 60 días en mora, su caso se encuentra en trámite de cobro juridico. Para conocer sobre el estado del trámite póngase en contacto . Si tienes alguna duda contactenos https://wa.link/eh4uqu Aveonline.                
`;
  return html;
};
export const sendSmsDay_TwoMonth = async ({
  factura,
}: sendSmsDay_TwoMonthProps) => {
  const html = smsDay_TwoMonth_html({ factura });
  await sendSms({
    telefono: factura.telefono,
    html,
  });
};
