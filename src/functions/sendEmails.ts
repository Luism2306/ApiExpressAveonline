import axios from "axios";
export interface sendEmailProps {
  html: string;
  email: string;
  subject: string;
}

export async function sendEmail({
  email,
  html,
  subject,
}: sendEmailProps): Promise<void> {
  try {
    const bodyTemplate = `${html}`;
    const payload = {
      to: email,
      subject,
      body: bodyTemplate,
    };
    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v2/email/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Hub-Aveonline": "AVeonline",
        },
      }
    );
    //console.log(`Correo electrónico enviado a: ${email}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}
