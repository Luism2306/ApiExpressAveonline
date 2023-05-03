import { Factura } from "./getInvoiceInfo";
import { sendEmail } from "./sendEmails";

export interface sendEmailDay_mananaProps {
  factura: Factura;
}
export const emailDay_manana_html = ({
  factura,
}: sendEmailDay_mananaProps) => {
  const html = `
  <div style="font-family: 'Open Sans',sans-serif; margin:0 auto; justify-content: center !important;">
  <div style="width:600px;border-radius:10px;background:#ffffff;padding-bottom:32px; border-style: solid; border-width: 1px 1px 1px 1px; border-color: #EBEBEB;
  box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 6%);">
      <div
          style="padding-left:0!important;height:12px;background:linear-gradient(296.48deg,#ac24f1 46.11%,#ff585d 97.89%);border-radius:10px 10px 0px 0px ; ">
      </div>
      <div style="padding:40px;">
          <div style="margin-top:40px;margin-bottom:32px;width: 512px;margin: 20px auto;">
              <div style="text-align:center;margin-top:28px">
                  <img src="https://ci5.googleusercontent.com/proxy/x0e9U7KINSRr1XLqN5aVwXwodKVG4cdcsvQdG6SqrSKRBIEb_OhmTqzPzWcKLjbFpGzQV-uJyri7RJZc9oQJAdnvyTEWq1fiAkA=s0-d-e1-ft#https://app.aveonline.co/assets/img/mano-onboarding.png"
                      alt="" class="CToWUd" data-bit="iit">
              </div>
              <h1
                  style="font-style:normal;margin-top:26.48px;font-weight:700;font-size:24px;line-height:24px;text-align:center;color:#4a4f54">
                  Hola ${factura.cliente},</h1>
              <span style="margin:20px 0px;color:#222;">Estimado cliente, Aveonline te recuerda que mañana vence el plazo para el pago de tu factura ${
                factura.factura
              } por valor de ${
    factura.saldo
  } para acceder a los medios de pago visita ${encodeURI(
    `https://aveonline-facturas.vercel.app/?factura=${factura.factura.replace(
      " ",
      "-"
    )}`
  )} . Si ya pagaste o tienes dineros pendientes por reembolsar de los dineros recaudados haz caso
                  omiso. Si tienes alguna, <a
                      src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos</a>
                  .</span>
              <div style="
                  margin-top: 40px;
                  margin-bottom: 32px;
                  border: 1px solid #dcdcdc;
                  width: 514px; margin:20px auto;"></div>
          </div>
      </div>

  </div>
</div>
`;
  return html;
};
export const sendEmailDay_manana = async ({
  factura,
}: sendEmailDay_mananaProps) => {
  const html = emailDay_manana_html({ factura });
  await sendEmail({
    email: factura.correocliente,
    subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
    html,
  });
};
