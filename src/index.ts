import express from "express";
import swaggerUI from "swagger-ui-express";

import { ErrorHandlingMiddleware } from "./middleware/ErrorHandlingMiddleware";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

// set routes
app.use(router);

app.use(ErrorHandlingMiddleware);

export { app };
