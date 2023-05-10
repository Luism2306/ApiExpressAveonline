import express from "express";
import bodyParser from "body-parser";
import cron from "node-cron";
import {
  sendEmailFacturas,
  sendEmailFacturasPruebas,
} from "./functions/SendEmail";
import { sendSmsFacturasPruebas } from "./functions/SendPhones";
import { sendWhatsappFacturasPruebas } from "./functions/SendWhatsapp";
import { getInvoiceInfo } from "./functions/getInvoiceInfo";


import router from "./routes";
const app = express();

app.use(bodyParser.json());
app.use(router);

//Facturas Vencidas de Aveonline activas
app.get("/facturas", async (req, res) => {
  try {
    const facturas = await getInvoiceInfo("cliente", "factura", 1000);
    res.json(facturas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error obteniendo las facturas");
  }
});

//Envio email
app.get("/send-emails", async (req, res) => {
  try {
    await sendEmailFacturasPruebas();
    res.send("Todos los correos han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los sms");
  }
});

//Envio de sms
app.get("/send-sms", async (req, res) => {
  try {
    await sendSmsFacturasPruebas();
    res.send("Todos los sms han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los sms");
  }
});

//Envio de whatsapp
app.get("/send-whatsapp", async (req, res) => {
  try {
    await sendWhatsappFacturasPruebas();
    res.send("Todos los whatsapp han sido enviados exitosamente.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error enviando los whatsapp");
  }
});

app.listen(4002, () => {
  console.log("API escuchando en el puerto 4002");
});

//cron.schedule("0 9 * * *", sendEmailsFacturas);
//cron.schedule("0 9 * * *", sendSmsFacturas);
//cron.schedule("0 9 * * *", sendWhatsappFacturas);
