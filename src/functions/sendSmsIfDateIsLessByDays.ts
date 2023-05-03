import { isDateMenosDay } from "./isDateMenosDay";
import { sendSmsDay_manana } from "./sendSmsDayManana";
import { sendSmsDay_hoy } from "./sendSmsDayHoy";
import { sendSmsDay_15 } from "./sendSmsDay15";
import { sendSmsDay_Mounth } from "./sendSmsMounth";
import { sendSmsDay_MonthHalf } from "./sendSmsMonthHalf";
import { sendSmsDay_TwoMonth } from "./sendSmstwoMonth";
import { Factura } from "./getInvoiceInfo";

export interface sendSmsIfDateIsLessByDaysProps {
  factura: Factura;
}

export async function sendSmsIfDateIsLessByDays({
  factura,
}: sendSmsIfDateIsLessByDaysProps) {
  const fechaVencimiento = new Date(factura.fechaVencimineto);

  if (isDateMenosDay({ date: fechaVencimiento, menosDias: -1 })) {
    await sendSmsDay_manana({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 1 })) {
    await sendSmsDay_hoy({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 15 })) {
    await sendSmsDay_15({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 30 })) {
    await sendSmsDay_Mounth({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 45 })) {
    await sendSmsDay_MonthHalf({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 60 })) {
    await sendSmsDay_TwoMonth({ factura });
  } else {
    // más de 60
  }
}
