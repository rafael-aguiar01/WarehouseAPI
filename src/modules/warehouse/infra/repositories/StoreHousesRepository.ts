
import { ICreateStorehouseDTO, IDeleteStorehouseDTO, IStorehouseRepository } from "@modules/warehouse/repositories/IStoreHousesRepository";
import { getRepository, Repository } from "typeorm";
import { Storehouse } from "../typeorm/entities/Storehouse";

class StorehouseRepository
    implements IStorehouseRepository{
        private repository: Repository<Storehouse>;
        private static INSTANCE: StorehouseRepository;

        constructor(){
            this.repository = getRepository(Storehouse)
        }
    async findById(id: string): Promise<Storehouse> {
        const storehouse = await this.repository.findOne({ id });
        return storehouse;
    }
    
    async findByName(name: string): Promise<Storehouse> {
        const storehouse = await this.repository.findOne({ name })
        return storehouse;
    }
    async create({ name }: ICreateStorehouseDTO): Promise<void> {
        const storehouse = this.repository.create({
            name
        });
        await this.repository.save(storehouse)
    }
    async deleteById({ id }: IDeleteStorehouseDTO): Promise<void> {
        await this.repository.delete(id);
    }      
    }

export { StorehouseRepository}