import { Storehouse } from "../infra/typeorm/entities/Storehouse";

interface ICreateStoreHouseDTO{
    name: string;
}

interface IStoreHouseRepository {
    findByName(name: string): Promise<Storehouse>;
    create({ name }: ICreateStoreHouseDTO): Promise<void>
}

export { ICreateStoreHouseDTO, IStoreHouseRepository }