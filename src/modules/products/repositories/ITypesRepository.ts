import { Type } from "../infra/typeorm/entities/Type";

interface ICreateTypeDTO{
    description: string
}

interface ITypesRepository{
    findByDescription(description: string): Promise<Type>;
    create({ description }: ICreateTypeDTO): Promise<void>;
}

export { ICreateTypeDTO, ITypesRepository }