import { container } from "tsyringe";


import { UnitsRepository } from "@modules/products/infra/repositories/UnitsRepository";
import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository";
import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";
import { TypesRepository } from "@modules/products/infra/repositories/TypesRepository";


container.registerSingleton<IUnitsRepository>(
    "UnitsRepository",
    UnitsRepository
);

container.registerSingleton<ITypesRepository>(
    "TypesRepository",
    TypesRepository
);