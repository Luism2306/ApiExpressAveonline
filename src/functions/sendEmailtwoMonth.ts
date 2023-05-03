import { Factura } from "./getInvoiceInfo";
import { sendEmail } from "./sendEmails";

export interface sendEmailDay_TwoMonthProps {
  factura: Factura;
}
export const emailDay_TwoMonth_html = ({
  factura,
}: sendEmailDay_TwoMonthProps) => {
  const html = `
  <div style="font-family: 'Open Sans',sans-serif; display:flex;margin:0 auto; justify-content: center !important;">
  <div style="width:600px;border-radius:10px;background:#ffffff;padding-bottom:32px; border-style: solid; border-width: 1px 1px 1px 1px; border-color: #EBEBEB;
  box-shadow: 0px 2px 10px 0px rgb(0 0 0 / 6%);">
      <div
          style="padding-left:0!important;height:12px;background:linear-gradient(296.48deg,#ac24f1 46.11%,#ff585d 97.89%);border-radius:10px 10px 0px 0px ; ">
      </div>
      <div style="padding-left:43px">
          <div>
              <div style="text-align:center;margin-top:28px">
                  <img src="https://ci5.googleusercontent.com/proxy/x0e9U7KINSRr1XLqN5aVwXwodKVG4cdcsvQdG6SqrSKRBIEb_OhmTqzPzWcKLjbFpGzQV-uJyri7RJZc9oQJAdnvyTEWq1fiAkA=s0-d-e1-ft#https://app.aveonline.co/assets/img/mano-onboarding.png"
                      alt="" class="CToWUd" data-bit="iit">
              </div>

              <span>${factura.cliente} nuevamente te notificamos que la factura ${factura.factura} por valor
                  ${factura.saldo} está pendiente de pago presentando una demora superior a 30 días. Es necesario que
                  canceles tu obligación de manera inmediata para que evites el traslado de tu deuda a cobranza
                  prejurídica. Aveonline. Si tienes alguna duda <a
                      src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos
                      Aveonline</a></span>
              <div style="
                  margin-top: 40px;
                  margin-bottom: 32px;
                  border: 1px solid #dcdcdc;
                  width: 514px"></div>
          </div>
      </div>

  </div>
</div>
`;
  return html;
};
export const sendEmailDay_TwoMonth = async ({
  factura,
}: sendEmailDay_TwoMonthProps) => {
  const html = emailDay_TwoMonth_html({ factura });
  await sendEmail({
    email: factura.correocliente,
    subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
    html,
  });
};
