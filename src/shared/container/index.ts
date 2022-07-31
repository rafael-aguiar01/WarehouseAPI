import { container } from "tsyringe";


import { UnitsRepository } from "@modules/products/infra/repositories/UnitsRepository";
import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository";
import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";
import { TypesRepository } from "@modules/products/infra/repositories/TypesRepository";
import { IStorehouseRepository } from "@modules/warehouse/repositories/IStoreHousesRepository";
import { StorehouseRepository } from "@modules/warehouse/infra/repositories/StoreHousesRepository";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { ProductRepository } from "@modules/products/infra/repositories/ProductsRepository";



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

container.registerSingleton<IProductsRepository>(
    "ProductRepository",
    ProductRepository
);