import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const listSpecificationRepository = SpecificationRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationsUseCase(
  listSpecificationRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationUseCase
);

export { listSpecificationsController };
