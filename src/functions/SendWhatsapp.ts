import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { sendWhatsappIfDateIsLessByDays } from "./sendWhatsappIfDateIsLessByDays";

export interface SendWhatsappPayload  {
  facturas:Factura[]
}

export async function sendWhatsappFacturas({facturas}: SendWhatsappPayload): Promise<void> {
  for (const factura of facturas) {
    await sendWhatsappIfDateIsLessByDays({factura})
  }
}
export async function sendWhatsappFacturasAveonline(): Promise<void> {
  const facturas = await getInvoiceInfo();
  await sendWhatsappFacturas({facturas})
}
export async function sendWhatsappFacturasPruebas(): Promise<void> {
  const facturas : Factura[] = [
    {
      nit: "123456789-0",
      prefijoFactura: "LO",
      factura: "LO 35677",
      cliente: "Luis Miguel",
      numeroFactura: 35677,
      saldo: 30000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/10",
      telefono:"573127445632",
    },
  ];
  await sendWhatsappFacturas({facturas})
}


