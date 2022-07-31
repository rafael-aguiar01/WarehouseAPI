import { Router } from 'express';
import { productRoutes } from './products.routes';
import { storehouseRoutes } from './storehouses.routes';
import { typesRoutes } from './types.routes';
import { unitsRoutes } from './units.routes';

const router = Router();

router.use("/units", unitsRoutes);
router.use("/types", typesRoutes);
router.use("/storehouses",storehouseRoutes);
router.use("/products",productRoutes);

export { router }