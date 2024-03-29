import { Storehouse  } from "@modules/warehouse/infra/typeorm/entities/Storehouse";
import { ICreateStorehouseDTO, IDeleteStorehouseDTO, IStorehouseRepository } from "../IStoreHousesRepository";


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

    async findById(id: string): Promise<Storehouse> {
        const storehouse = this.storehouses.find((storehouse) => storehouse.id === id);
        return storehouse;
    }
    async deleteById({ id }: IDeleteStorehouseDTO): Promise<void> {
        this.storehouses = this.storehouses.filter((storehouse) => storehouse.id !== id)
    }
}

export { StorehouseRepositoryInMemory }