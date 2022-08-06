
import { DeleteAddressController } from '@modules/warehouse/useCases/DeleteAddress/DeleteAddressController';
import { CreateAddressController } from '@modules/warehouse/useCases/CreateAddress/CreateAddressUseCaseController';

import { Router } from 'express';

const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const deleteAddressController = new DeleteAddressController();

addressRoutes.post(
    "/",
    createAddressController.handle
);

addressRoutes.delete(
    "/:id",
    deleteAddressController.handle
);

export { addressRoutes }