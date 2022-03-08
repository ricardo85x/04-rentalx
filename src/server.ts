import express, { NextFunction, Request, Response } from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

// set routes
app.use(router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(401).json({ error: error.message });
  }

  return res
    .status(500)
    .json({ status: "Error", message: "Internal Server Error" });
});

app.listen(3333, () => console.log("listening on port 3333"));
