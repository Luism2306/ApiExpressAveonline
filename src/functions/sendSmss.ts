import axios from "axios";
export interface sendSmsProps {
    body: string;
    to: [string];
  
}

export async function sendSms({ body, to }: sendSmsProps): Promise<void> {
  try {
    const bodyTemplate = `${body}`;

    const payload = {
      to: ["573223173104"],
      body: bodyTemplate,
    };
    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v1/sms/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    //console.log(`Correo electrónico enviado a: ${email}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando SMS");
  }
}
