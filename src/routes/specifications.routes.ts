import { Router, Request, Response } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

specificationRoutes.get("/", (req: Request, res: Response) => {
  return res.json(specificationRepository.list());
});

export { specificationRoutes };
