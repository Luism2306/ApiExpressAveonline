import express from "express";
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hola Bienvenido al  Api de envios de sms y correos de Aveonline!");
});

export default router;
