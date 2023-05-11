import { Request, Response, NextFunction } from "express";

export const home = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.send("¡Bienvenido a la API!");
  } catch (error) {
    return res.status(500).json({
      error: "Error en el servidor",
    });
  }
};
