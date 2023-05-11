import express from "express";

import {home} from "../../controllers/Home/get"
const router = express.Router();

router.get("/", home);

export default router;
