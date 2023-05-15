import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_hoyProps {
  factura: Factura;
}
export const smsDay_hoy_html = ({
  factura,
}: sendSmsDay_hoyProps) => {
  const html = `
            Hola ${factura.cliente}, Recuerda que hoy vence el pago de tu factura ${
                factura.factura
              } por valor de ${
        factura.saldo
      } para acceder a los medios de pago visita ${encodeURI(
        `https://cobrocartera.aveonline.co/?factura=${factura.factura.replace(
          " ",
          "-"
        )}`
      )} .para que lo realices oportunamente. Si ya pagaste o tienes dineros pendientes por reembolsar de los dineros recaudados haz caso omiso. Aveonline. Si tienes alguna duda, contactanos https://wa.link/eh4uqu .
              
`;
  return html;
};
export const sendSmsDay_hoy = async ({
  factura,
}: sendSmsDay_hoyProps) => {
  const html = smsDay_hoy_html({ factura });
  await sendSms({
    telefono: factura.telefono,
    html,
  });
};
