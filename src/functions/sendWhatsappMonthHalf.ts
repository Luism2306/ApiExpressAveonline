import { Factura } from "./getInvoiceInfo";
import { sendWhatsapp } from "./sendWhatsapps";

export interface sendWhatsappDay_MonthHalfProps {
  factura: Factura;
}

export const sendWhatsappDay_MonthHalf = async ({
  factura,
}: sendWhatsappDay_MonthHalfProps) => {
  const saldoFormatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(factura.saldo);

  await sendWhatsapp({
    phone: factura.telefono,
    type: "template",
    template: {
      name: "factura_vencida_hace_45_dias",
      lang: "es",
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "text",
              text:factura.cliente,
            },
          ],
        },
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: factura.factura,
            },
            {
              type: "text",
              text:saldoFormatted
            },
            {
              type: "text",
              text: `${encodeURI(
                `https://aveonline-facturas.vercel.app/?factura=${factura.factura.replace(
                  " ",
                  "-"
                )}`
              )}`,
            },
          ],
        },
      ],
    },
  });
};
