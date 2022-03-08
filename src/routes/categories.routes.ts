import { Router, Request, Response } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
  return listCategoryController.handle(req, res);
});

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  (req: Request, res: Response) => {
    return importCategoryController.handle(req, res);
  }
);

export { categoriesRoutes };
