import { Type } from "../infra/typeorm/entities/Type";

interface ICreateTypeDTO{
    description: string;
}

interface IDeleteTypeDTO{
    id: string;
}

interface ITypesRepository{
    findByDescription(description: string): Promise<Type>;
    findByID(id: string): Promise<Type>;
    create({ description }: ICreateTypeDTO): Promise<void>;
    deleteByDescription({ id }: IDeleteTypeDTO ):Promise<void>;
}

export { ICreateTypeDTO, ITypesRepository, IDeleteTypeDTO }