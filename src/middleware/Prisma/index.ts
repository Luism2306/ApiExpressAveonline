import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

export const mdPrisma = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient();
  try {
    req["prisma"] = prisma;
    next();
  } catch (error) {
    return res.status(400).json(error);
  } finally {
    await prisma.$disconnect();
  }
};
