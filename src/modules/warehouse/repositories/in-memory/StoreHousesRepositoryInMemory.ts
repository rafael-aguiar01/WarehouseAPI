import { Storehouse  } from "@modules/warehouse/infra/typeorm/entities/Storehouse";
import { IStorehouseRepository, ICreateStorehouseDTO } from "../IStorehousesRepository";

class StorehouseRepositoryInMemory implements IStorehouseRepository {

    storehouses: Storehouse[] = [];

    async create({ name }: ICreateStorehouseDTO): Promise<void> {
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