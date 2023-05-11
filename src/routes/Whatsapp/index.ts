import express from "express";
import { sendWhatsappFacturasPruebas } from "../../functions/SendWhatsapp";
const router = express.Router();

router.get("/send-whatsapp", async (req, res) => {
  try {
    await sendWhatsappFacturasPruebas();
    res.send("Todos los mensajes de WhatsApp han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los mensajes de WhatsApp");
  }
});

export default router;
