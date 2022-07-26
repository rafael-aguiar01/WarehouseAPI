import { CreateUnityController } from "@modules/products/useCases/CreateUnity/CreateUnityController";

import { Router } from 'express';

const unitsRoutes = Router ();

const createUnityController = new CreateUnityController();

unitsRoutes.post(
    "/",
    createUnityController.handle
);

export { unitsRoutes }