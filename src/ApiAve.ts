import express from "express";
import bodyParser from "body-parser";


import router from "./routes";
const app = express();

app.use(bodyParser.json());
app.use("/api",router);


app.listen(3002, () => {
  console.log("API escuchando en el puerto 3002");
});


