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
      prefijoFactura: "ABC",
      factura: "LO 31365",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/03",
      telefono:"573223173104",

    },
    {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "LO 31365",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456, 
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/05/02",
      telefono:"573223173104",

    },
    {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "LO 31365",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/04/18",
      telefono:"573223173104",
    },
    {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "LO 31365",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/04/02",
      telefono:"573223173104",

    },
    {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "LO 31365",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/03/18",
      telefono:"573223173104",

    },
    {
      nit: "123456789-0",
      prefijoFactura: "ABC",
      factura: "LO 31365",
      cliente: "Cliente de Prueba",
      numeroFactura: 123456,
      saldo: 100000,
      correocliente: "luigui23062001@gmail.com",
      fechaVencimineto:"2023/03/02",
      telefono:"573223173104",

    }
  ];
  await sendSmsFacturas({facturas})
}


