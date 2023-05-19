export function generarInformeHtml(
  correosEnviados: { email: string; datos: any }[]
): string {
  let html = "<h1>Informe de correos enviados</h1>";

  for (const correoEnviado of correosEnviados) {
    html += `
        <h2>Correo enviado a: ${correoEnviado.email}</h2>
        <p>Datos:</p>
        <pre>${JSON.stringify(correoEnviado.datos, null, 2)}</pre>
        <hr>
      `;
  }

  return html;
}
