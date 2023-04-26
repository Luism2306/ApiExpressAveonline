import axios from "axios";
import { getAllEmails } from "./getAllEmail";

interface SendEmailPayload {
  email: string;
}

export async function sendEmail({ email }: SendEmailPayload): Promise<void> {
  try {
    const payload = {
      to:email,
      subject: "Buenas Tardes",
      body: "ddd",
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
    console.log(`Correo electrónico enviado a: ${email}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}

interface SendEmailsPayload {
  to: string;
  subject: string;
  body: string;
}

export async function sendEmails(): Promise<void> {
  try {
    const emails = await getAllEmails();
    for (const email of emails) {
      await sendEmail({
        email
      })
    }
    console.log(
      "Todos los correos electrónicos han sido enviados exitosamente."
    );
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando correos electrónicos");
  }
}
