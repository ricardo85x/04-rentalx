import { Category } from "../../model/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}
  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
