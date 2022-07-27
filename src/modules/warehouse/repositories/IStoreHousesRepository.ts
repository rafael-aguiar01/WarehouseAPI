import { Storehouse } from "../infra/typeorm/entities/Storehouse";

interface ICreateStorehouseDTO{
    name: string;
}

interface IStorehouseRepository {
    findByName(name: string): Promise<Storehouse>;
    create({ name }: ICreateStorehouseDTO): Promise<void>
}

export { ICreateStorehouseDTO, IStorehouseRepository }