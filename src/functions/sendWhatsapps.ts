import axios from "axios";

interface ImageParameter {
  type: string;
  image: {
    link: string;
  };
}

interface TextParameter {
  type: string;
  text: string;
}

interface CurrencyParameter {
  type: string;
  currency: {
    fallback_value: string;
    code: string;
    amount_1000: number;
  };
}

interface DateTimeParameter {
  type: string;
  date_time: {
    fallback_value: string;
    day_of_week: number;
    day_of_month: number;
    year: number;
    month: number;
    hour: number;
    minute: number;
  };
}

export interface sendWhatsappProps {
  phone: string;
  type: string;
  template: {
    name: string;
    lang: string;
    components: {
      type: string;
      parameters:
        | (ImageParameter | TextParameter | CurrencyParameter)[]
        | (ImageParameter | TextParameter | DateTimeParameter)[];
    }[];
  };
}

export async function sendWhatsapp({
  phone,
  type,
  template,
}: sendWhatsappProps): Promise<void> {
  try {
    const payload = {
      phone,
      type,
      template,
    };

    await axios.post(
      "https://notificaciones.api.aveonline.co/api/v1/whatsapp/messages",
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
    throw new Error("Error enviando mensaje de WhatsApp");
  }
}
