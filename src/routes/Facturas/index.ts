import express from "express";
import { getInvoiceInfo } from "../../functions/getInvoiceInfo";
const router = express.Router();

router.get("/facturas", async (req, res) => {
  try {
    const facturas = await getInvoiceInfo("cliente", "factura", 1000);
    res.json(facturas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error obteniendo las facturas");
  }
});

export default router;
