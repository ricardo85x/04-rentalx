import express, { NextFunction, Request, Response } from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(401).json({ error: error.message });
  }

  return res
    .status(500)
    .json({ status: "Error", message: "Internal Server Error" });
});

app.listen(3333, () => console.log("listening on port 3333"));
