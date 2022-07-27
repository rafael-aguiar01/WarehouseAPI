import { container } from "tsyringe";


import { UnitsRepository } from "@modules/products/infra/repositories/UnitsRepository";
import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository";
import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";
import { TypesRepository } from "@modules/products/infra/repositories/TypesRepository";
import { StorehouseRepository } from "@modules/warehouse/infra/repositories/StorehousesRepository";
import { IStorehouseRepository } from "@modules/warehouse/repositories/IStorehousesRepository";


container.registerSingleton<IUnitsRepository>(
    "UnitsRepository",
    UnitsRepository
);

container.registerSingleton<ITypesRepository>(
    "TypesRepository",
    TypesRepository
);
container.registerSingleton<IStorehouseRepository>(
    "StorehouseRepository",
    StorehouseRepository
);