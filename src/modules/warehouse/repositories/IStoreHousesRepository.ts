import { Storehouse } from "../infra/typeorm/entities/Storehouse";

interface ICreateStorehouseDTO{
    name: string;
}

interface IDeleteStorehouseDTO{
    id: string;
}

interface IStorehouseRepository {
    findByName(name: string): Promise<Storehouse>;
    findById(id: string): Promise<Storehouse>;
    create({ name }: ICreateStorehouseDTO): Promise<void>
    deleteById({id}: IDeleteStorehouseDTO): Promise<void>;
}

export { ICreateStorehouseDTO, IStorehouseRepository, IDeleteStorehouseDTO }