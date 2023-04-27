import express from "express";

import Home from "./Home";
import User from "./User";
import Email from "./Email";
import Phone from "./Phone";

const router = express.Router();

router.use("/", Home);
router.use("/user",User);
router.use("/email",Email);
router.use("/phone",Phone);

export default router;
