import { Request, Response, NextFunction } from "express";
import { getAllPhone } from "../../functions/getAllPhone";

export const getListPhones = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      
    const phones = await getAllPhone()

    return res.status(200).json({
        phones,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
