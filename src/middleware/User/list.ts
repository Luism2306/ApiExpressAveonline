import { Request, Response, NextFunction } from "express";

export const mdGetListUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { query } = req;
    if (query.id == "1") {
      throw "Error 1";
    }

    next();
  } catch (error) {
    console.log(error);

    return res.status(400).json({
      error,
    });
  }
};
