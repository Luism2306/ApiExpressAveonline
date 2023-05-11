import express from "express";
import bodyParser from "body-parser";
import cron from "node-cron";


import router from "./routes";
const app = express();

app.use(bodyParser.json());
app.use("/api",router);


app.listen(3002, () => {
  console.log("API escuchando en el puerto 3002");
});

//cron.schedule("0 9 * * *", sendEmailsFacturas);
//cron.schedule("0 9 * * *", sendSmsFacturas);
//cron.schedule("0 9 * * *", sendWhatsappFacturas);
