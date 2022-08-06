import { Address } from "@modules/warehouse/infra/typeorm/entities/Address";    

interface ICreateAddressDTO{
    storehouse_id: string;
    code: string;
    capacity: number;
}

interface IDeleteAddressDTO{
    id: string;
}

interface IAddressRepository {
    findByCode(code: string): Promise<Address>;
    findByID(id: string): Promise<Address>;
    create({storehouse_id, code, capacity}: ICreateAddressDTO): Promise<void>;
    deleteById({ id }: IDeleteAddressDTO): Promise<void>;
}

export { ICreateAddressDTO, IAddressRepository, IDeleteAddressDTO }