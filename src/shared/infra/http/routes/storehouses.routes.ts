import { CreateStorehouseController } from '@modules/warehouse/useCases/CreateStore/CreateStoreHouseController';
import { DeleteStorehouseController } from '@modules/warehouse/useCases/DeleteStore/DeleteStorehouseController';
import { Router } from 'express';

const storehouseRoutes = Router();

const createStorehouseController = new CreateStorehouseController();
const deleteStorehouseController = new DeleteStorehouseController();

storehouseRoutes.post(
    "/",
    createStorehouseController.handle
);

storehouseRoutes.delete(
    "/:id",
    deleteStorehouseController.handle
);

export { storehouseRoutes }