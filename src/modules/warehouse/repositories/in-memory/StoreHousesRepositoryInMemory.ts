import { Storehouse  } from "@modules/warehouse/infra/typeorm/entities/Storehouse";
import { IStoreHouseRepository, ICreateStoreHouseDTO } from "../IStoreHousesRepository";

class StorehouseRepositoryInMemory implements IStoreHouseRepository {

    storehouses: Storehouse[] = [];

    async create({ name }: ICreateStoreHouseDTO): Promise<void> {
        const storehouse = new Storehouse();

        Object.assign(storehouse, {
            name
        })
        this.storehouses.push(storehouse)
    }

    async findByName(name: string): Promise<Storehouse> {
       const storehouse = this.storehouses.find((storehouse) => storehouse.name === name);
       return storehouse;
    }
}

export { StorehouseRepositoryInMemory }