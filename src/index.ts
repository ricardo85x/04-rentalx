import express from "express";
import swaggerUI from "swagger-ui-express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AppDataSource } from "./database";
import { ErrorHandlingMiddleware } from "./middleware/ErrorHandlingMiddleware";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
// connect to database

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

// set routes
app.use(router);

app.use(ErrorHandlingMiddleware);

export { app };
