import { CreateProductTypeController } from "@modules/products/useCases/CreateProductType/CreateProductTypeController";
import { DeleteTypeController } from "@modules/products/useCases/DeleteType/DeleteTypeController";

import { Router } from 'express';

const typesRoutes = Router();

const createProductTypeController = new CreateProductTypeController();
const deleteTypeController = new DeleteTypeController();

typesRoutes.post(
    "/",
    createProductTypeController.handle
);

typesRoutes.post(
    "/:id",
    deleteTypeController.handle
);

export { typesRoutes }