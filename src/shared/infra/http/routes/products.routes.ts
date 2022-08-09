
import { CreateProductController } from '@modules/products/useCases/CreateProduct/CreateProductController';
import { DeleteProductController } from '@modules/products/useCases/DeleteProduct/DeleteProductController';
import { Router } from 'express';


const productRoutes = Router();

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.post(
    "/",
    createProductController.handle
);

productRoutes.delete(
    "/:id",
    deleteProductController.handle
)



export { productRoutes }