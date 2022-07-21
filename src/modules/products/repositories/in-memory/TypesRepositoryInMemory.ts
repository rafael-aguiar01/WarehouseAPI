import { Type } from "@modules/products/infra/typeorm/entities/Type";
import { ITypesRepository, ICreateTypeDTO } from "../ITypesRepository";

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
}

export { TypesRepositoryInMemory }