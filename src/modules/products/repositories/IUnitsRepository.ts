import { Unity } from "../infra/typeorm/entities/Unity";

interface ICreatUnityDTO{
    description: string;
}

interface IUnitsRepository {
    findByDescription(description: string): Promise<Unity>;
    create({ description }: ICreatUnityDTO): Promise<void>;
}

export { ICreatUnityDTO, IUnitsRepository }