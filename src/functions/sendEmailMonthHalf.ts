import { Factura } from "./getInvoiceInfo";
import { sendEmail } from "./sendEmails";

export interface sendEmailDay_MonthHalfProps {
  factura: Factura;
}
export const emailDay_MonthHalf_html = ({
  factura,
}: sendEmailDay_MonthHalfProps) => {
  const html = `
  <p><div style="font-family: 'Open Sans',sans-serif; margin:0 auto; justify-content: center !important;">
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
    
                    <span style="margin:20px 0px;color:#222;">${factura.cliente} No hemos recibido el pago de tu factura ${factura.factura} por valor
                        ${factura.saldo} que presenta una mora de más de 45 días. Si no confirmamos el pago de tu obligación
                        el día de hoy, tu caso será direccionado al departamento de cobranza prejurídica y de ser necesario
                        jurídica donde tendrás entendimiento con nuestros asesores legales. ¡Evíta más gastos! AveOnline. Si
                        tienes alguna duda <a
                            src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos
                            Aveonline</a></span>
                    <div style="
                        margin-top: 40px;
                        margin-bottom: 32px;
                        border: 1px solid #dcdcdc;
                        width: 514px; margin:20px auto;"></div>
                </div>
            </div>
    
        </div>
    </div></p>
`;
  return html;
};
export const sendEmailDay_MonthHalf = async ({
  factura,
}: sendEmailDay_MonthHalfProps) => {
  const html = emailDay_MonthHalf_html({ factura });
  await sendEmail({
    email: factura.correocliente,
    subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
    html,
  });
};
