import { Router, Request, Response } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return res.status(201).send();
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
  return res.json(categoriesRepository.list());
});

export { categoriesRoutes };
