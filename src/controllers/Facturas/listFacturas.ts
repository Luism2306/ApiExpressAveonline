import { Request, Response, NextFunction } from "express";
import { getInvoiceInfo } from "../../functions/getInvoiceInfo";

export const getListEmails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
      
    const emails = await getInvoiceInfo()

    return res.status(200).json({
        emails,
    });
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};
