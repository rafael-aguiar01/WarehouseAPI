import { ITypesRepository, ICreateTypeDTO, IDeleteTypeDTO,  } from "@modules/products/repositories/ITypesRepository";
import { getRepository, Repository } from "typeorm";
import { Type } from "../typeorm/entities/Type";

class TypesRepository
    implements ITypesRepository{
        private repository: Repository<Type>;
        private static INSTANCE: TypesRepository;

        constructor(){
            this.repository = getRepository(Type)
        }
   
    async findByDescription(description: string): Promise<Type> {
        const type = await this.repository.findOne({description})
        return type;
    }
    async findByID(id: string): Promise<Type> {
        const type = await this.repository.findOne({id})
        return type;
    }
    async create({ description }: ICreateTypeDTO): Promise<void> {
        const type = this.repository.create({
            description
        });
        await this.repository.save(type)
    }

    async deleteByDescription({ id }: IDeleteTypeDTO): Promise<void> {
        await this.repository.delete(id)
    }

   

    }

export { TypesRepository }