import { IUnitsRepository, ICreatUnityDTO, IDeleteUnityDTO } from "@modules/products/repositories/IUnitsRepository";
import { getRepository, Repository } from "typeorm";
import { Unity } from "../typeorm/entities/Unity";

class UnitsRepository 
    implements IUnitsRepository {
        private repository: Repository<Unity>;
    
    private static INSTANCE: UnitsRepository;

    constructor(){
        this.repository = getRepository(Unity)
    }
    async findByDescription(description: string): Promise<Unity> {
        const unity = await this.repository.findOne({description})
        return unity;
    }
    async create({ description }: ICreatUnityDTO): Promise<void> {
        const unity = this.repository.create({
            description
        });
        await this.repository.save(unity)
    }

    delete({ id }: IDeleteUnityDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}

export { UnitsRepository }