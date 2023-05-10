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
  const fechaActual = new Date();

  const diasDiferencia = Math.floor(
    (fechaActual.getTime() - fechaVencimiento.getTime()) / (1000 * 3600 * 24)
  );

  if (diasDiferencia === -1) {
    await sendWhatsappDay_manana({ factura });
  } else if (diasDiferencia === 0) {
    await sendWhatsappDay_hoy({ factura });
  } else if (diasDiferencia === 15) {
    await sendWhatsappDay_15({ factura });
  } else if (diasDiferencia === 30) {
    await sendWhatsappDay_Mounth({ factura });
  } else if (diasDiferencia === 45) {
    await sendWhatsappDay_MonthHalf({ factura });
  } else if (diasDiferencia === 60) {
    await sendWhatsappDay_TwoMonth({ factura });
  } else {
    // más de 60
  }
}
