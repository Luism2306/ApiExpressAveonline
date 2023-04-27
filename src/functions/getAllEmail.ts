import axios from "axios";

interface Respuesta {
  facturas: { correocliente: string; factura?: string }[];
}

export async function getAllEmails(): Promise<string[]> {
  const response = await axios.post(
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

  const data: unknown = response.data;
  const respuestaValida = (respuesta: unknown): respuesta is Respuesta => {
    return (
      typeof respuesta === "object" &&
      Array.isArray((respuesta as any).facturas) &&
      typeof (respuesta as any).facturas[0] === "object" &&
      typeof (respuesta as any).facturas[0].correocliente === "string"
    );
  };

  if (!respuestaValida(data)) {
    throw new Error("La respuesta de la API no es válida");
  }

  const emails = data.facturas
    .map((factura) => factura.correocliente)
    .filter((email) => email);

  return emails;
}
