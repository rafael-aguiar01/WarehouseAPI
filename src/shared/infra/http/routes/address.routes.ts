
import { CreateAddressController } from '@modules/warehouse/useCases/CreateAddress/CreateAddressUseCaseController';
import { Router } from 'express';

const addressRoutes = Router();

const createAddressController = new CreateAddressController

addressRoutes.post(
    "/",
    createAddressController.handle
);

export { addressRoutes }