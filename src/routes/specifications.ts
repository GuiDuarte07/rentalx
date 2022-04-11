import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };