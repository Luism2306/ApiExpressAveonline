import { Factura, getInvoiceInfo } from "./getInvoiceInfo";
import { sendEmailIfDateIsLessByDays } from "./sendEmailIfDateIsLessByDays";

export interface SendEmailPayload  {
  facturas:Factura[]
}

export async function sendEmailFacturas({facturas}: SendEmailPayload): Promise<void> {
  for (const factura of facturas) {
    await sendEmailIfDateIsLessByDays({factura})
  }
}
export async function sendEmailFacturasAveonline(): Promise<void> {
  const facturas = await getInvoiceInfo();
  await sendEmailFacturas({facturas})
}
export async function sendEmailFacturasPruebas(): Promise<void> {
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
  await sendEmailFacturas({facturas})
}


