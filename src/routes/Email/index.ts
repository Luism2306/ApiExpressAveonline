import express from "express";
import { getListEmails } from "../../controllers/Email/listEmail";
const router = express.Router();

router.get("/", getListEmails);

export default router;
