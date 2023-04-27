import express from "express";
import { getListUsers } from "../../controllers/User/list";
import { mdPrisma } from "../../middleware/Prisma";
import { mdGetListUsers } from "../../middleware/User/list";
const router = express.Router();

router.get("/", [mdGetListUsers],mdPrisma, getListUsers);

router.get("/create", function (req, res, next) {
  res.send("Hola Users create");
});
export default router;
