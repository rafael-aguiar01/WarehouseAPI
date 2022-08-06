import { CreateUnityController } from "@modules/products/useCases/CreateUnity/CreateUnityController";
import { DeleteUnitController } from "@modules/products/useCases/DeleteUnity/DeleteUnitController";

import { Router } from 'express';

const unitsRoutes = Router();

const createUnityController = new CreateUnityController();
const deleteUnitController = new DeleteUnitController();

unitsRoutes.post(
    "/",
    createUnityController.handle
);

unitsRoutes.delete(
    "/:id",
    deleteUnitController.handle
);


export { unitsRoutes }