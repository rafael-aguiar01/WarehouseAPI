
import { CreateProductController } from '@modules/products/useCases/CreateProduct/CreateProductController';
import { Router } from 'express';

const productRoutes = Router();

const createProductController = new CreateProductController

productRoutes.post(
    "/",
    createProductController.handle
);

export { productRoutes }