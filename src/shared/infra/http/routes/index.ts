import { Router } from 'express';
import { unitsRoutes } from './units.routes';

const router = Router();

router.use("/units", unitsRoutes);

export { router }