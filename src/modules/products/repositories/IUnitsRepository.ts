import { Unity } from "../infra/typeorm/entities/Unity";

interface ICreatUnityDTO{
    description: string;
}

interface IDeleteUnityDTO{
    id: string;
}

interface IUnitsRepository {
    findByDescription(description: string): Promise<Unity>;
    findByID(id: string): Promise<Unity>;
    create({ description }: ICreatUnityDTO): Promise<void>;
    deleteById({ id }: IDeleteUnityDTO): Promise<void>;
}

export { ICreatUnityDTO, IUnitsRepository, IDeleteUnityDTO }