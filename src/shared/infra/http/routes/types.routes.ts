import { CreateProductTypeController } from "@modules/products/useCases/CreateProductType/CreateProductTypeController";

import { Router } from 'express';

const typesRoutes = Router();

const createProductTypeController = new CreateProductTypeController();

typesRoutes.post(
    "/",
    createProductTypeController.handle
);

export { typesRoutes }