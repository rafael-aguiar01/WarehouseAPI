import { container } from "tsyringe";

import { UnitsRepository } from "@modules/products/infra/repositories/UnitsRepository";
import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository";
import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";
import { TypesRepository } from "@modules/products/infra/repositories/TypesRepository";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { ProductRepository } from "@modules/products/infra/repositories/ProductsRepository";
import { IStorehouseRepository } from "@modules/warehouse/repositories/IStorehousesRepository";
import { StorehouseRepository } from "@modules/warehouse/infra/repositories/StoreHousesRepository";
import { AddressRepository } from "@modules/warehouse/infra/repositories/AdressesRepository";
import { IAddressRepository } from "@modules/warehouse/repositories/IAddresesRepository";
import { IMovimentsRepository } from "@modules/moviment/repositories/IMovimentsRepository";
import { MovimentsRepository } from "@modules/moviment/infra/typeorm/repositories/MovimentsRepository";
import { IBalancesRepository } from "@modules/moviment/repositories/IBalancesRepository";
import { BalancesRepository } from "@modules/moviment/infra/typeorm/repositories/BalancesRepository";


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

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
);

container.registerSingleton<IMovimentsRepository>(
    "MovimentsRepository",
    MovimentsRepository
);

container.registerSingleton<IBalancesRepository>(
    "BalancesRepository",
    BalancesRepository
);