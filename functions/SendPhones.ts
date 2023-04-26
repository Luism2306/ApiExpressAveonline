import axios from "axios";
import { getAllPhone } from "./getAllPhone";

interface SendPhonePayload {
  phone: string[];
}

export async function sendSMS({ phone }: SendPhonePayload): Promise<void> {
  try {
    const phones = await getAllPhone();
    const payload = {
      to: [phone],
      body: "Has generado un nuevo envio, para verlo ingresa a https://aveonline.co/",
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
    console.log("Mensaje de texto enviado exitosamente a todos los teléfonos.");
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando mensaje de texto");
  }
}

interface SendPhonesPayload {
  to: string[];
  body: string;
}

export async function sendSMSs(): Promise<void> {
  try {
    const phones = await getAllPhone();
    for (const phone of phones) {
      await sendSMS({
        phone: [phone],
      });
    }
    console.log("Mensaje de texto enviado exitosamente a todos los teléfonos.");
  } catch (error) {
    console.error(error);
    throw new Error("Error enviando mensaje de texto");
  }
}
