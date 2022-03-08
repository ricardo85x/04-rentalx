import express from "express";

import { ErrorHandlingMiddleware } from "./middleware/ErrorHandlingMiddleware";
import { router } from "./routes";

const app = express();

app.use(express.json());

// set routes
app.use(router);

app.use(ErrorHandlingMiddleware);

app.listen(3333, () => console.log("listening on port 3333"));
