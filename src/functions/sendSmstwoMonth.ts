import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_TwoMonthProps {
  factura: Factura;
}
export const emailDay_TwoMonth_html = ({
  factura,
}: sendSmsDay_TwoMonthProps) => {
  const html = `
  Aveonline te informa que ante el incumplimiento de pago de su factura ${factura.factura} con más de 60 días en mora, su caso se encuentra en trámite de cobro juridico. Para conocer sobre el estado del trámite póngase en contacto . Si tienes alguna duda contactenos https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonlineco%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n Aveonline.                
`;
  return html;
};
export const sendSmsDay_TwoMonth = async ({
  factura,
}: sendSmsDay_TwoMonthProps) => {
  const html = emailDay_TwoMonth_html({ factura });
  await sendSms({
    to: [factura.telefono],
    body: html,
  });
};
