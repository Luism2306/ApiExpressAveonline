import express from "express";
import bodyParser from "body-parser";
import cron from "node-cron";
import {
  sendEmailFacturas,
  sendEmailFacturasPruebas,
} from "./functions/SendEmail";
import { sendSmsFacturasPruebas } from "./functions/SendPhones";
import { getInvoiceInfo } from "./functions/getInvoiceInfo";

import router from "./routes";
const app = express();

app.use(bodyParser.json());
app.use(router);

app.get("/facturas", async (req, res) => {
  try {
    const facturas = await getInvoiceInfo("cliente", "factura", 1000);

    res.json(facturas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error obteniendo las facturas");
  }
});

app.get("/send-emails", async (req, res) => {
  try {
    await sendEmailFacturasPruebas();
    res.send("Todos los correos han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los sms");
  }
});

//Lista de mensajes a los clientes
app.get("/send-sms", async (req, res) => {
  try {
    await sendSmsFacturasPruebas();
    res.send("Todos los sms han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los sms");
  }
});

app.listen(3000, () => {
  console.log("API escuchando en el puerto 3000");
});

//cron.schedule("0 9 * * *", sendEmailsFacturas);
//cron.schedule("* * * * *", sendEmailsFacturas);
//cron.schedule("*/2 * * * *", sendSmssFacturas);
