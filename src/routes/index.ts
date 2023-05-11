import express from "express";

import Home from "./Home";
import Facturas from "./Facturas";
import Email from "./Email";
import Phone from "./Phone";
import Whatsapp from "./Whatsapp";

const router = express.Router();

router.use("/", Home);
router.use("/facturas",Facturas);
router.use("/email",Email);
router.use("/phone",Phone);
router.use("/whatsapp",Whatsapp);

export default router;
