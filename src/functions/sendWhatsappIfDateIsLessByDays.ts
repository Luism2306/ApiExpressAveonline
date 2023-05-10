import { isDateMenosDay } from "./isDateMenosDay";
import { sendWhatsappDay_manana } from "./sendWhatsappDayManana";
import { sendWhatsappDay_hoy } from "./sendWhatsappDayHoy";
import { sendWhatsappDay_15 } from "./sendWhatsappDay15";
import { sendWhatsappDay_Mounth } from "./sendWhatsappMounth";
import { sendWhatsappDay_MonthHalf } from "./sendWhatsappMonthHalf";
import { sendWhatsappDay_TwoMonth } from "./sendWhatsapptwoMonth";
import { Factura } from "./getInvoiceInfo";

export interface sendWhatsappIfDateIsLessByDaysProps {
  factura: Factura;
}

export async function sendWhatsappIfDateIsLessByDays({
  factura,
}: sendWhatsappIfDateIsLessByDaysProps) {
  const fechaVencimiento = new Date(factura.fechaVencimineto);

  if (isDateMenosDay({ date: fechaVencimiento, menosDias: -1 })) {
    await sendWhatsappDay_manana({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 1 })) {
    await sendWhatsappDay_hoy({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 15 })) {
    await sendWhatsappDay_15({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 30 })) {
    await sendWhatsappDay_Mounth({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 45 })) {
    await sendWhatsappDay_MonthHalf({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 60 })) {
    await sendWhatsappDay_TwoMonth({ factura });
  } else {
    // más de 60
  }
}
