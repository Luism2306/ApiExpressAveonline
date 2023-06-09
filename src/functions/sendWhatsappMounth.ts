import { Factura } from "./getInvoiceInfo";
import { sendWhatsapp } from "./sendWhatsapps";

export interface sendWhatsappDay_MounthProps {
  factura: Factura;
}

export const sendWhatsappDay_Mounth = async ({
  factura,
}: sendWhatsappDay_MounthProps) => {
  const saldoFormatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(factura.saldo);

  await sendWhatsapp({
    phone: factura.telefono,
    type: "template",
    template: {
      name: "factura_vencida_hace_30_dias",
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
              type: "text",
              text:saldoFormatted
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
