import express from "express";
import { sendEmailFacturasAveonline } from "../../functions/SendEmail";
const router = express.Router();

import cron from "node-cron";

router.get("/send-emails", async (req, res) => {
  try {
    await sendEmailFacturasAveonline();
    res.send("Todos los correos han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los correos");
  }
});
// Ejecutar cada lunes a las 9:00 AM
cron.schedule("0 9 * * 1", sendEmailFacturasAveonline);

export default router;
