import express from "express";
import { sendSmsFacturasAveonline } from "../../functions/SendPhones";
import cron from "node-cron";
const router = express.Router();

router.get("/send-sms", async (req, res) => {
  try {
    await sendSmsFacturasAveonline();
    res.send("Todos los SMS han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los SMS");
  }
});
// Ejecutar cada lunes a las 9:00 AM
cron.schedule("0 9 * * 1", sendSmsFacturasAveonline);
export default router;
