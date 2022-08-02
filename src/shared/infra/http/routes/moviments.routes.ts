import { CreateMovimentController } from '@modules/moviment/useCases/CreateMoviment/CreateMovimentController';
import { Router } from 'express';

const movimentsRoutes = Router();

const createMovimentController = new CreateMovimentController

movimentsRoutes.post(
    "/",
    createMovimentController.handle
);

export { movimentsRoutes }