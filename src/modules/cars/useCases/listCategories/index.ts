import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoryRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoryController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoryController };
