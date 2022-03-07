import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationUseCase: ListSpecificationsUseCase) {}
  async handle(req: Request, res: Response) {
    const result = await this.listSpecificationUseCase.execute();
    return res.json(result);
  }
}
