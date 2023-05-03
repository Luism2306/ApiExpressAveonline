import { isDateMenosDay } from "./isDateMenosDay";
import { sendEmailDay_manana } from "./sendEmailDayManana";
import { sendEmailDay_hoy } from "./sendEmailDayHoy";
import { sendEmailDay_15 } from "./sendEmailDay15";
import { sendEmailDay_Mounth } from "./sendEmailMounth";
import { sendEmailDay_MonthHalf } from "./sendEmailMonthHalf";
import { sendEmailDay_TwoMonth } from "./sendEmailtwoMonth";
import { Factura } from "./getInvoiceInfo";

export interface sendEmailIfDateIsLessByDaysProps {
  factura: Factura;
}

export async function sendEmailIfDateIsLessByDays({
  factura,
}: sendEmailIfDateIsLessByDaysProps) {
  const fechaVencimiento = new Date(factura.fechaVencimineto);

  if (isDateMenosDay({ date: fechaVencimiento, menosDias: -1 })) {
    await sendEmailDay_manana({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 1 })) {
    await sendEmailDay_hoy({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 15 })) {
    await sendEmailDay_15({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 30 })) {
    await sendEmailDay_Mounth({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 45 })) {
    await sendEmailDay_MonthHalf({ factura });
  } else if (isDateMenosDay({ date: fechaVencimiento, menosDias: 60 })) {
    await sendEmailDay_TwoMonth({ factura });
  } else {
    // más de 60
  }
}
