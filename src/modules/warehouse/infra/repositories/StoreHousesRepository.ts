import { IStoreHouseRepository, ICreateStoreHouseDTO } from "@modules/warehouse/repositories/IStoreHousesRepository";
import { getRepository, Repository } from "typeorm";
import { Storehouse } from "../typeorm/entities/Storehouse";

class StorehouseRepository
    implements IStoreHouseRepository{
        private repository: Repository<Storehouse>;
        private static INSTANCE: StorehouseRepository;

        constructor(){
            this.repository = getRepository(Storehouse)
        }
    async findByName(name: string): Promise<Storehouse> {
        const storehouse = await this.repository.findOne({ name })
        return storehouse;
    }
    async create({ name }: ICreateStoreHouseDTO): Promise<void> {
        const storehouse = this.repository.create({
            name
        });
        await this.repository.save(storehouse)
    }      
    }

export { StorehouseRepository}