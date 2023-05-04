import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { sendSmsIfDateIsLessByDays } from "./sendSmsIfDateIsLessByDays";

export interface SendSmsPayload  {
  facturas:Factura[]
}

export async function sendSmsFacturas({facturas}: SendSmsPayload): Promise<void> {
  for (const factura of facturas) {
    await sendSmsIfDateIsLessByDays({factura})
  }
}
export async function sendSmsFacturasAveonline(): Promise<void> {
  const facturas = await getInvoiceInfo();
  await sendSmsFacturas({facturas})
}
export async function sendSmsFacturasPruebas(): Promise<void> {
  const facturas : Factura[] = [
    {
      nit: "123456789-0",
      prefijoFactura: "LO",
      factura: "LO 35677",
      cliente: "Breiner Fabian Murillo Romero",
      numeroFactura: 35677,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/05",
      telefono:"573223173104",
    },
  ];
  await sendSmsFacturas({facturas})
}


