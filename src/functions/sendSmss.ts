import axios from "axios";
export interface sendSmsProps {
  html: string;
  telefono: string;
}

export async function sendSms({ 
  html, telefono
 }: sendSmsProps): Promise<void> {
  try {
    const htmlTemplate = `${html}`;

    const payload = {
      to: [telefono],
      body: htmlTemplate,
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
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando SMS");
  }
}
