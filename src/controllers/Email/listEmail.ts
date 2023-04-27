import { Request, Response, NextFunction } from "express";
import { getAllEmails } from "../../functions/getAllEmail";

export const getListEmails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      
    const emails = await getAllEmails()

    return res.status(200).json({
        emails,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
