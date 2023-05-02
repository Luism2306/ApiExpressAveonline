import axios from "axios";
import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { isDateMenosDay } from "./isDateMenosDay";

export interface sendEmailProps {
  html: string;
  email: string;
  subject: string;
}

export async function sendEmail({
  email,
  html,
  subject,
}: sendEmailProps): Promise<void> {
  try {
    const bodyTemplate = `${html}`;

    const payload = {
      to: "luigui23062001@gmail.com",
      subject,
      body: bodyTemplate,
    };
    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v2/email/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Hub-Aveonline": "AVeonline",
        },
      }
    );
    //console.log(`Correo electrónico enviado a: ${email}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}

export interface SendEmailPayload extends Factura {}

export async function sendEmailFacturas({}: SendEmailPayload): Promise<void> {
  try {
    const facturas = await getInvoiceInfo();
    for (const factura of facturas) {
      const fechaVencimiento = new Date(factura.fechaVencimineto);
      if (
        isDateMenosDay({
          date: fechaVencimiento,
          menosDias: -1,
        })
      ) {
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
                    <h1
                        style="font-style:normal;margin-top:26.48px;font-weight:700;font-size:24px;line-height:24px;text-align:center;color:#4a4f54">
                        Hola ${factura.cliente},</h1>
                    <span>Estimado cliente, Aveonline te recuerda que mañana vence el plazo para el pago de tu factura ${
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
                        width: 514px"></div>
                </div>
            </div>
    
        </div>
    </div>
    `;
        await sendEmail({
          email: factura.correocliente,
          subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
          html,
        });
        //console.log(`Correo electrónico enviado a: ${"luigui23062001@gmail.com"}`);
      } else if (
        isDateMenosDay({
          date: fechaVencimiento,
          menosDias: 1,
        })
      ) {
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
                <h1
                    style="font-style:normal;margin-top:26.48px;font-weight:700;font-size:24px;line-height:24px;text-align:center;color:#4a4f54">
                    Hola ${factura.cliente},</h1>
                <span>Recuerda que hoy vence el pago de tu factura ${
                  factura.factura
                } por valor de ${
          factura.saldo
        } para acceder a los medios de pago visita ${encodeURI(
          `https://aveonline-facturas.vercel.app/?factura=${factura.factura.replace(
            " ",
            "-"
          )}`
        )} para que lo realices oportunamente.Si ya pagaste o tienes dineros pendientes por reembolsar de los dineros recaudados haz caso omiso. Aveonline. Si tienes alguna duda, <a src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos</a></span>
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
        await sendEmail({
          email: factura.correocliente,
          subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
          html,
        });
        //console.log(`Correo electrónico enviado a: ${correocliente}`);
      } else if (
        isDateMenosDay({
          date: fechaVencimiento,
          menosDias: 15,
        })
      ) {
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
                   
                    <span>${
                      factura.cliente
                    } hemos confirmado que el pago de tu factura ${
          factura.factura
        } con vencimiento ${
          factura.fechaVencimineto
        } no se ha efectuado. Te invitamos a ponerte al día con la obligación ${encodeURI(
          `https://aveonline-facturas.vercel.app/?factura=${factura.factura.replace(
            " ",
            "-"
          )}`
        )}. Si tienes alguna duda <a src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contactanos Aveonline</a></span>
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
        await sendEmail({
          email: factura.correocliente,
          subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
          html,
        });
        //console.log(`Correo electrónico enviado a: ${correocliente}`);
      } else if (
        isDateMenosDay({
          date: fechaVencimiento,
          menosDias: 30,
        })
      ) {
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
        await sendEmail({
          email: factura.correocliente,
          subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
          html,
        });
        //console.log(`Correo electrónico enviado a: ${correocliente}`);
      } else if (
        isDateMenosDay({
          date: fechaVencimiento,
          menosDias: 45,
        })
      ) {
        const html = `
        <p><div style="font-family: 'Open Sans',sans-serif; display:flex;margin:0 auto; justify-content: center !important;">
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
    
                    <span>${factura.cliente} No hemos recibido el pago de tu factura ${factura.factura} por valor
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
                        width: 514px"></div>
                </div>
            </div>
    
        </div>
    </div></p>
        `;
        await sendEmail({
          email: factura.correocliente,
          subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
          html,
        });
        //console.log(`Correo electrónico enviado a: ${correocliente}`);
      } else if (
        isDateMenosDay({
          date: fechaVencimiento,
          menosDias: 60,
        })
      ) {
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

                <span>Aveonline te informa que ante el incumplimiento de pago de su factura ${factura.factura} con más de 60 días en mora, su caso se encuentra en trámite de cobro juridico. Para conocer sobre el estado del trámite póngase en <a src="https://web.whatsapp.com/send?phone=573233162889&text=Hola%2C%20estaba%20en%20https%3A%2F%2Faveonline.co%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.">contacto Aveonline</a>
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
        await sendEmail({
          email: factura.correocliente,
          subject: `Recordatorio de pago de factura ${factura.prefijoFactura} ${factura.numeroFactura}`,
          html,
        });
        //console.log(`Correo electrónico enviado a: ${correocliente}`);
      } else {
        //mas de 60
      }
    }
  } catch (error) {
    //console.log(error);
  }
}

export async function sendEmailFacturasPrueba(): Promise<void> {
  try {
    // Datos de prueba para enviar una factura de ejemplo
    const facturaPrueba = {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "001",
      cliente: "Cliente de Prueba",
      numeroFactura: "123456",
      saldo: "100000",
      correocliente: "luigui23062001@gmail.com",
    };
    const htmlPrueba = `
      <p>Esto es un correo de prueba para la factura ${facturaPrueba.factura}</p>
    `;
    const subjectPrueba = `Factura de prueba ${facturaPrueba.prefijoFactura} ${facturaPrueba.numeroFactura}`;

    // Enviamos el correo electrónico de prueba
    await sendEmail({
      email: facturaPrueba.correocliente,
      subject: subjectPrueba,
      html: htmlPrueba,
    });

    console.log(
      `Correo electrónico de prueba enviado a: ${facturaPrueba.correocliente}`
    );
  } catch (error) {
    console.log(error);
  }
}

/*
export async function sendEmailsFacturas(): Promise<void> {
  try {
    const facturas = await getInvoiceInfo();
    for (const factura of facturas) {
      await sendEmailFacturas({
        ...factura,
      });
    }
    console.log("Todos los correos mensajes han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando mensajes");
  }
}

*/
