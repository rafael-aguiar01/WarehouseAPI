import { Type } from "@modules/products/infra/typeorm/entities/Type";
import { ITypesRepository, ICreateTypeDTO, IDeleteTypeDTO } from "../ITypesRepository";

class TypesRepositoryInMemory implements ITypesRepository {

    types: Type[] = [];

    async create({ description }: ICreateTypeDTO): Promise<void> {
        const type = new Type();

        Object.assign(type, {
            description
        });

        this.types.push(type);
    }
    
    async findByDescription(description: string): Promise<Type> {
        const type = this.types.find((type) => type.description === description)
        return type
    }

    async findByID(id: string): Promise<Type> {
        const type = this.types.find((type) => type.id === id)
        return type;
    }

    async deleteByDescription({ id }: IDeleteTypeDTO): Promise<void> {
        this.types = this.types.filter((type) => type.id !== id)
    }
    
}

export { TypesRepositoryInMemory }