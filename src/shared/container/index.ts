import { container } from "tsyringe";


import { UnitsRepository } from "@modules/products/infra/repositories/UnitsRepository";
import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository";


container.registerSingleton<IUnitsRepository>(
    "UnitsRepository",
    UnitsRepository
);