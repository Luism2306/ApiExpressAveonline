export function generarInformeHtml1(
  smsEnviados: { telefono: string; datos: any }[]
): string {
  let html = "<h1>Informe de envíos de SMS</h1>";

  for (const smsEnviado of smsEnviados) {
    html += `
        <h2>SMS enviado a: ${smsEnviado.telefono}</h2>
        <p>Datos:</p>
        <pre>${JSON.stringify(smsEnviado.datos, null, 2)}</pre>
        <hr>
      `;
  }

  return html;
}
