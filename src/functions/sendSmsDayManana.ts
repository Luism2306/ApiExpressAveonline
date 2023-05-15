import { Factura } from "./getInvoiceInfo";
import { sendSms } from "./sendSmss";

export interface sendSmsDay_mananaProps {
  factura: Factura;
}
export const smsDay_manana_html = ({ factura }: sendSmsDay_mananaProps) => {
  const html = `Hola ${
    factura.cliente
  }, Estimado cliente, Aveonline te recuerda que mañana vence el plazo para el pago de tu factura ${
    factura.factura
  } por valor de ${
    factura.saldo
  } para acceder a los medios de pago visita ${encodeURI(
    `https://cobrocartera.aveonline.co/?factura=${factura.factura.replace(
      " ",
      "-"
    )}`
  )} . Si ya pagaste o tienes dineros pendientes por reembolsar de los dineros recaudados haz caso omiso. Si tienes alguna contactanos https://wa.link/eh4uqu  Aveonline .
`;
  return html;
};
export const sendSmsDay_manana = async ({
  factura,
}: sendSmsDay_mananaProps) => {
  const html = smsDay_manana_html({ factura });
  await sendSms({
    telefono: factura.telefono,
    html,
  });
};

