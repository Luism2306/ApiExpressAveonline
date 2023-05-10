import { Factura } from "./getInvoiceInfo";
import { sendWhatsapp } from "./sendWhatsapps";

export interface sendWhatsappDay_TwoMonthProps {
  factura: Factura;
}

export const sendWhatsappDay_TwoMonth = async ({
  factura,
}: sendWhatsappDay_TwoMonthProps) => {
  await sendWhatsapp({
    phone: factura.telefono,
    type: "template",
    template: {
      name: "factura_vencida_hace_60_dias",
      lang: "es",
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "image",
              image: {
                link: "https://pps.whatsapp.net/v/t61.24694-24/340571318_4783301751793692_5081658987458736009_n.jpg?ccb=11-4&oh=01_AdTyHvSIohFMMC7f0-SBhr6queuIiumwVILRnTqoVRrnIQ&oe=6468B544",
              },
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
