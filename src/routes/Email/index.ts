import express from "express";
import { sendEmailFacturasPruebas } from "../../functions/SendEmail";
const router = express.Router();

router.get("/send-emails", async (req, res) => {
  try {
    await sendEmailFacturasPruebas();
    res.send("Todos los correos han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los correos");
  }
});

export default router;
