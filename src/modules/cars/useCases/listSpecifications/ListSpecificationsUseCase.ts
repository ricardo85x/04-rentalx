import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";

export class ListSpecificationsUseCase {
  constructor(private specificationsRepository: SpecificationRepository) {}
  async execute() {
    return this.specificationsRepository.list();
  }
}
