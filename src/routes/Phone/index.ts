import express from "express";
import { sendSmsFacturasPruebas } from "../../functions/SendPhones";
const router = express.Router();

router.get("/send-sms", async (req, res) => {
  try {
    await sendSmsFacturasPruebas();
    res.send("Todos los SMS han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los SMS");
  }
});

export default router;
