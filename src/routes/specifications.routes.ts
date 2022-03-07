import { Router, Request, Response } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/listSpecifications";

const specificationRoutes = Router();

specificationRoutes.post("/", (req: Request, res: Response) => {
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req: Request, res: Response) => {
  return listSpecificationsController.handle(req, res);
});

export { specificationRoutes };
