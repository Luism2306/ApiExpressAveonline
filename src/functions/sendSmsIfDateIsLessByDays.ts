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
  const fechaActual = new Date();

  const diasDiferencia = Math.floor(
    (fechaActual.getTime() - fechaVencimiento.getTime()) / (1000 * 3600 * 24)
  );

  // ...

  if (diasDiferencia === -1) {
    await sendSmsDay_manana({ factura });
  } else if (diasDiferencia === 0) {
    await sendSmsDay_hoy({ factura });
  } else if (diasDiferencia >= 15 && diasDiferencia < 30) {
    await sendSmsDay_15({ factura });
  } else if (diasDiferencia >= 30 && diasDiferencia < 45) {
    await sendSmsDay_Mounth({ factura });
  } else if (diasDiferencia >= 45 && diasDiferencia < 60) {
    await sendSmsDay_MonthHalf({ factura });
  } else if (diasDiferencia >= 60) {
    await sendSmsDay_TwoMonth({ factura });
  } else {
    // Si diasDiferencia es menor que 15, no se envía ningún mensaje
  }

  // ...
}
