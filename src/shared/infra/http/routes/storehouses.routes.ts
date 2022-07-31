import { CreateStorehouseController } from "@modules/warehouse/useCases/CreateStore/CreateStorehouseController";

import { Router } from 'express';

const storehouseRoutes = Router();

const createStorehouseController = new CreateStorehouseController();

storehouseRoutes.post(
    "/",
    createStorehouseController.handle
);

export { storehouseRoutes }