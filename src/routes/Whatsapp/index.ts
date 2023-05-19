import express from "express";
import { sendWhatsappFacturasAveonline } from "../../functions/SendWhatsapp";
import cron from "node-cron";
const router = express.Router();

router.get("/send-whatsapp", async (req, res) => {
  try {
    await sendWhatsappFacturasAveonline();
    res.send("Todos los mensajes de WhatsApp han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los mensajes de WhatsApp");
  }
});

// Ejecutar cada lunes a las 9:00 AM
cron.schedule("30 11 * * *", sendWhatsappFacturasAveonline);
export default router;
