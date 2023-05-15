import { Factura } from "./getInvoiceInfo";
import { sendWhatsapp } from "./sendWhatsapps";

export interface sendWhatsappDay_15Props {
  factura: Factura;
}

export const sendWhatsappDay_15 = async ({
  factura,
}: sendWhatsappDay_15Props) => {
  await sendWhatsapp({
    phone: factura.telefono,
    type: "template",
    template: {
      name: "factura_vencida_hace_15_dias",
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
              text: factura.cliente,
            },
            {
              type: "text",
              text: factura.factura,
            },
            {
                type: "date_time",
                date_time: {
                    fallback_value: factura.fechaVencimineto,
                    day_of_week: 5,
                    day_of_month: 25,
                    year: 1977,
                    month: 2,
                    hour: 15,
                    minute: 33
                }
            },
            {
              type: "text",
              text: `${encodeURI(
                `https://cobrocartera.aveonline.co/?factura=${factura.factura.replace(
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
