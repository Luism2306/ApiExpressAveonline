import { Request, Response, NextFunction } from "express";

export const getListUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const prisma = req["prisma"];
    const result = await prisma.user.findMany();

    return res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      error,
    });
  }
};
