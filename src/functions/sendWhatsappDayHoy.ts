import { Factura } from "./getInvoiceInfo";
import { sendWhatsapp } from "./sendWhatsapps";

export interface sendWhatsappDay_hoyProps {
  factura: Factura;
}

export const sendWhatsappDay_hoy = async ({
  factura,
}: sendWhatsappDay_hoyProps) => {
  await sendWhatsapp({
    phone: factura.telefono,
    type: "template",
    template: {
      name: "hoy_vence_tu_factura",
      lang: "es",
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "image",
              image: {
                link:"https://pps.whatsapp.net/v/t61.24694-24/340571318_4783301751793692_5081658987458736009_n.jpg?ccb=11-4&oh=01_AdTyHvSIohFMMC7f0-SBhr6queuIiumwVILRnTqoVRrnIQ&oe=6468B544",
              },
            },
          ],
        },
        {
          type: "body",
          parameters: [
            { type: "text", text: factura.factura },
            {
              type: "currency",
              currency: {
                fallback_value: "100",
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
