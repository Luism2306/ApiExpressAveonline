import express from "express";
import { getListPhones } from "../../controllers/Phone/listPhones";
const router = express.Router();


router.get("/", getListPhones);


export default router;
