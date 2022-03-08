/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";

export const ErrorHandlingMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof Error) {
    return res.status(401).json({ error: error.message });
  }

  return res
    .status(500)
    .json({ status: "Error", message: "Internal Server Error" });
};
