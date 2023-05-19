export function generarInformeHtml2(
  whatsappEnviados: { telefono: string; datos: any }[]
): string {
  let html = "<h1>Informe de envíos de WhatsApp</h1>";

  for (const whatsappEnviado of whatsappEnviados) {
    html += `
        <h2>Mensaje de WhatsApp enviado a: ${whatsappEnviado.telefono}</h2>
        <p>Datos:</p>
        <pre>${JSON.stringify(whatsappEnviado.datos, null, 2)}</pre>
        <hr>
      `;
  }

  return html;
}
