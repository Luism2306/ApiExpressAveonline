import axios from "axios";

import { isDateMenosDay } from "./isDateMenosDay";
export interface Factura {
  idEmpresa?:number;
  totalDebito?:any;
  pendcastigada?:string;
  castigada?:string;
  prefijoFactura?:string;
  numeroFactura?:number;
  observacion?:string;
  factura?:string;
  totalFactura?:number;
  cliente?:string;
  nit?:string;
  telefono?:string;
  telefono1?:string;
  correocliente?:string;
  vencida?:string;
  fechaFactura?:string;
  fechaVencimineto?:string;
  diasVencimiento?:number;
  estadoCliente?:string;
  estadoNuevo?:string;
  saldo?:number;
  abonos?:number;
  notasCredito?:number;
  AsesorCom?:string;
  notasCreditoAnticipos?:number;
}

export interface ResponseData {
  facturas: Factura[];
}

export async function getInvoiceInfo(
  cliente?: string,
  factura?: string,
  saldo?: number,
): Promise<Factura[]> {
  const response = await axios.post<ResponseData>(
    "https://app.aveonline.co/api/comunes/v1.0/administrativo/cartera.php",
    {
      tipo: "cargarCartera",
      fechaInicial: "",
      fechaFinal: "",
      prefijo: "",
      edad: "mas90",
      factura: "",
      nit: "",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const responseData = response.data;
  if (!responseData || !Array.isArray(responseData.facturas)) {
    throw new Error("La respuesta de la API no es válida");
  }

  const modifiedFacturas = responseData.facturas.map((factura) => {
    // Agregar "57" al comienzo del número de teléfono si no está vacío
    if (factura.telefono) {
      factura.telefono = "57" + factura.telefono;
    }
    return factura;
  });

  const filteredFacturas = modifiedFacturas.filter((factura) => {
    return isDateMenosDay({
      date: new Date(factura.fechaVencimineto),
      menosDias: 357,
    }) && factura.estadoNuevo !== "Juridico";
  });

  return filteredFacturas;
}

