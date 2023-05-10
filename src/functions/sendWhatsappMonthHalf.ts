import { Factura } from "./getInvoiceInfo";
import { sendWhatsapp } from "./sendWhatsapps";

export interface sendWhatsappDay_MonthHalfProps {
  factura: Factura;
}

export const sendWhatsappDay_MonthHalf = async ({
  factura,
}: sendWhatsappDay_MonthHalfProps) => {
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
              type: "currency",
              currency: {
                fallback_value: "$100.99",
                code: "COP",
                amount_1000: factura.saldo,
              },
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
