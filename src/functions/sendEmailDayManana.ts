import { Factura } from "./getInvoiceInfo";
import { sendEmail } from "./sendEmails";

export interface sendEmailDay_mananaProps {
  factura: Factura;
}
export const emailDay_manana_html = ({
  factura,
}: sendEmailDay_mananaProps) => {
  const html = `
  <div style="width:100%;margin-bottom:2rem">
    <div style="width:100%;display:flex">
        <img style="width:140px;display:flex;margin:20px auto"
            src="https://ci6.googleusercontent.com/proxy/QHWsCSQJ2I9W6AYJLonxiduKjJFszfBL1iFb5QjxFwg2TiaMxWo_RCFnFtMxankrIWFjO_Osy5mptOyfEslYpwdpyRdRhpIz7TM=s0-d-e1-ft#https://app.aveonline.co/assets/img/logo-onboarding.png"
            alt="icon ave" class="CToWUd" data-bit="iit">
    </div>
</div>
<div
    style="font-family: 'Open Sans',sans-serif; margin:0 auto; justify-content: center !important; width:600px;border-radius:10px;padding-bottom:32px; background:#f6f6f7; border-style: solid; border-width: 1px 1px 1px 1px; border-color: #EBEBEB; margin: 20px auto;">
    <div style="width:600px; background:#f6f6f7;border-radius:10px; margin:auto;">
        <div
            style="padding-left:0!important;height:12px;background:linear-gradient(296.48deg,#ac24f1 46.11%,#ff585d 97.89%);border-radius:10px 10px 0px 0px ; ">
        </div>
        <div style="padding:40px; font-family: 'Open Sans',sans-serif;">
            <div style="margin-top:40px;margin-bottom:32px;width: 512px;margin: 20px auto;">
                <div style="text-align:center;margin-top:28px">
                    <img src="https://ci5.googleusercontent.com/proxy/x0e9U7KINSRr1XLqN5aVwXwodKVG4cdcsvQdG6SqrSKRBIEb_OhmTqzPzWcKLjbFpGzQV-uJyri7RJZc9oQJAdnvyTEWq1fiAkA=s0-d-e1-ft#https://app.aveonline.co/assets/img/mano-onboarding.png"
                        alt="" class="CToWUd" data-bit="iit">
                </div>
                <h1
                    style="font-style:normal;margin-top:26.48px;font-weight:700;font-size:24px;line-height:24px;text-align:center;color:#4a4f54">
                    Hola ${factura.cliente},</h1>
                <span style="margin:20px 0px;color:#222;">Estimado cliente, Aveonline te recuerda que mañana vence el
                    plazo para el pago de tu factura ${
                    factura.factura
                    } por valor de ${
                    factura.saldo
                    } para acceder a los medios de pago visita ${encodeURI(
                    `https://cobrocartera.aveonline.co/?factura=${factura.factura.replace(
                    " ",
                    "-"
                    )}`
                    )} . Si ya pagaste o tienes dineros pendientes por reembolsar de los dineros recaudados haz caso
                    omiso. Si tienes alguna, contactanos.</span>
                <div style="
                    margin-top: 40px;
                    margin-bottom: 32px;
                    border: 1px solid #dcdcdc;
                    width: 514px; margin:20px auto;"></div>
            </div>
        </div>
        <div style="text-align:center;">
            <div style="margin-bottom:8px">
                <span>Gracias por elegirnos,</span>
            </div>
            <span style="font-family:'Open Sans',sans-serif;font-style:normal;font-weight:700">El equipo de
                Aveonline.</span>
        </div>
        <div style="width:100%;margin-top:40px">
            <div style="width:100%;display:flex">
                <div style="display:flex;width:100px;margin:0 auto">
                    <a href="http://url6955.aveonline.co/ls/click?upn=vOtdPOi0epXvQgmORA5HJ-2FvX7PqPMNu2vY20aisI-2BW5nb8QwiCd2akgZpsRFbo0HINkeKiA-2BT18G-2BNXWrbVNWw-3D-3DUvxN_lj-2BOuw7yZDbh7yUmDr0hTxI3-2Bb2J04E0aOL3PJjQmO-2B2nsXarMgvezhwPAocmg4dbWpei1HP7ze0RdQmSCaAxeV4GXfadREU2fHZCw-2BLKHSZ2jDxxkG4lS-2BW1T-2B-2FtI-2F8XHds4c9CXkK5EyonGnZO0GkP5iwyES-2BJJkcZ-2F9Mt2SLHB8tfw-2F2WumBAvvo-2Bio3JuXdqtuV6NMXYyucoM5zPy-2BKo8I4S3QHYarKyJs4Y-2FbU-3D"
                        rel="noopener noreferrer" target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=http://url6955.aveonline.co/ls/click?upn%3DvOtdPOi0epXvQgmORA5HJ-2FvX7PqPMNu2vY20aisI-2BW5nb8QwiCd2akgZpsRFbo0HINkeKiA-2BT18G-2BNXWrbVNWw-3D-3DUvxN_lj-2BOuw7yZDbh7yUmDr0hTxI3-2Bb2J04E0aOL3PJjQmO-2B2nsXarMgvezhwPAocmg4dbWpei1HP7ze0RdQmSCaAxeV4GXfadREU2fHZCw-2BLKHSZ2jDxxkG4lS-2BW1T-2B-2FtI-2F8XHds4c9CXkK5EyonGnZO0GkP5iwyES-2BJJkcZ-2F9Mt2SLHB8tfw-2F2WumBAvvo-2Bio3JuXdqtuV6NMXYyucoM5zPy-2BKo8I4S3QHYarKyJs4Y-2FbU-3D&amp;source=gmail&amp;ust=1683300500339000&amp;usg=AOvVaw34Ic2NMA0YzVWUcOU9lZsj">
                        <img width="13" height="23"
                            src="https://ci5.googleusercontent.com/proxy/8F35w2bp8K0O6N0OdlnMHvDwI_GYDUefE2zfia-Wt-KuL2RcCBSA4fjJAfBIgxm3VHQ6msFxdr0E9YtqNGFVQBjuCDl7nbaYzOMsCq5M=s0-d-e1-ft#https://app.aveonline.co/assets/img/facebook-onboarding.png"
                            alt="" class="CToWUd" data-bit="iit">
                    </a>
                    <a href="http://url6955.aveonline.co/ls/click?upn=vOtdPOi0epXvQgmORA5HJ6ApxG2CtQD8x6XbvKVSU-2FNcVc2eT5z62dOtYcqB-2FJdwcKJJeyXROazkzoknQAiqYQ-3D-3DLptY_lj-2BOuw7yZDbh7yUmDr0hTxI3-2Bb2J04E0aOL3PJjQmO-2B2nsXarMgvezhwPAocmg4dbWpei1HP7ze0RdQmSCaAxV0furyW8JGW8zfa3NgyHlp429MDvEUhzKy2u9XTxIkf2uuTx5o35v1Hk7MRwxHxkkFuBG-2Bo6Ic2CdFZK7mlN4SkdIqPkm2kG1M0Dn-2BDrQZzqwQ9xq0PCgjsvPNYb5xyLwTZH0wRFGACxIEAb2blvvY-3D"
                        rel="noopener noreferrer" target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=http://url6955.aveonline.co/ls/click?upn%3DvOtdPOi0epXvQgmORA5HJ6ApxG2CtQD8x6XbvKVSU-2FNcVc2eT5z62dOtYcqB-2FJdwcKJJeyXROazkzoknQAiqYQ-3D-3DLptY_lj-2BOuw7yZDbh7yUmDr0hTxI3-2Bb2J04E0aOL3PJjQmO-2B2nsXarMgvezhwPAocmg4dbWpei1HP7ze0RdQmSCaAxV0furyW8JGW8zfa3NgyHlp429MDvEUhzKy2u9XTxIkf2uuTx5o35v1Hk7MRwxHxkkFuBG-2Bo6Ic2CdFZK7mlN4SkdIqPkm2kG1M0Dn-2BDrQZzqwQ9xq0PCgjsvPNYb5xyLwTZH0wRFGACxIEAb2blvvY-3D&amp;source=gmail&amp;ust=1683300500339000&amp;usg=AOvVaw3wpZbOmBN1GArrkgZNh604">
                        <img width="24" height="24" style="margin-left:1rem"
                            src="https://ci6.googleusercontent.com/proxy/I_jPMpITqw358-GsLinREwV8aDLwDz8df3whWKL8vNKTX5505hBWAYcprQaduTe-2-t5kO5gfBcfLeWE7H1Wzt-rj_71Yf1jvKgGLlnT45PsH8U=s0-d-e1-ft#https://app.aveonline.co/assets/img/Instagram-ave-onboarding.png"
                            alt="icon ave" class="CToWUd" data-bit="iit">
                    </a>
                    <a href="http://url6955.aveonline.co/ls/click?upn=vOtdPOi0epXvQgmORA5HJ1Qhb8Hn-2BWnTKMeyIwlEuFfkJH-2BqeQzDZsVUbQNic79EyO7B4uJPUDxv2hA2MJcMrA-3D-3DVA4y_lj-2BOuw7yZDbh7yUmDr0hTxI3-2Bb2J04E0aOL3PJjQmO-2B2nsXarMgvezhwPAocmg4dbWpei1HP7ze0RdQmSCaAxdIDrt1kCa9R8NrATqDo12slLoREN55z8y-2BqxCsmrt-2F2SGfyGhQQPlpQxQSFuGfMZ8bJ0e0KBIc0ZaA3mzreAO1uO-2FklwUSt0V0QplW0kXCfYHpX-2BkMSG2R68eFTycsvwY3JCh72803dL-2FyL-2Bgb5tDw-3D"
                        rel="noopener noreferrer" target="_blank"
                        data-saferedirecturl="https://www.google.com/url?q=http://url6955.aveonline.co/ls/click?upn%3DvOtdPOi0epXvQgmORA5HJ1Qhb8Hn-2BWnTKMeyIwlEuFfkJH-2BqeQzDZsVUbQNic79EyO7B4uJPUDxv2hA2MJcMrA-3D-3DVA4y_lj-2BOuw7yZDbh7yUmDr0hTxI3-2Bb2J04E0aOL3PJjQmO-2B2nsXarMgvezhwPAocmg4dbWpei1HP7ze0RdQmSCaAxdIDrt1kCa9R8NrATqDo12slLoREN55z8y-2BqxCsmrt-2F2SGfyGhQQPlpQxQSFuGfMZ8bJ0e0KBIc0ZaA3mzreAO1uO-2FklwUSt0V0QplW0kXCfYHpX-2BkMSG2R68eFTycsvwY3JCh72803dL-2FyL-2Bgb5tDw-3D&amp;source=gmail&amp;ust=1683300500340000&amp;usg=AOvVaw1FULTpKUVbOe_oxOpRFLYy">
                        <img width="24" height="24" style="margin-left:1rem"
                            src="https://ci6.googleusercontent.com/proxy/MapRb7Z40Fw-64cp8NWcWDnHqcPgljuulQWMYXOhJuVmGv-sACBbm4cgLF9KyuXxomBkePyttp-ZCIyTCTF4mHgvhTAhKXY-Yk5hOvKS=s0-d-e1-ft#https://app.aveonline.co/assets/img/linkedin-onboarding.png"
                            alt="" class="CToWUd" data-bit="iit">
                    </a>
                </div>
            </div>
        </div>
        <div style="width:100%;text-align:center;margin-top:30px;padding-bottom:30px;">
            <span>© Aveonline 2023 · Medellín - CO.</span>
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
