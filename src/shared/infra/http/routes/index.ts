import { Router } from 'express';
import { typesRoutes } from './types.routes';
import { unitsRoutes } from './units.routes';

const router = Router();

router.use("/units", unitsRoutes);
router.use("/types", typesRoutes);

export { router }