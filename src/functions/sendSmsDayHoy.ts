import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_hoyProps {
  factura: Factura;
}
export const emailDay_hoy_html = ({
  factura,
}: sendSmsDay_hoyProps) => {
  const html = `
            Hola ${factura.cliente}, Recuerda que hoy vence el pago de tu factura ${
                factura.factura
              } por valor de ${
        factura.saldo
      } para acceder a los medios de pago visita ${encodeURI(
        `https://aveonline-facturas.vercel.app/?factura=${factura.factura.replace(
          " ",
          "-"
        )}`
      )} para que lo realices oportunamente.Si ya pagaste o tienes dineros pendientes por reembolsar de los dineros recaudados haz caso omiso. Aveonline. Si tienes alguna duda, <a src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos</a>
              
`;
  return html;
};
export const sendSmsDay_hoy = async ({
  factura,
}: sendSmsDay_hoyProps) => {
  const html = emailDay_hoy_html({ factura });
  await sendSms({
    to: [factura.telefono],
    body: html,
  });
};
