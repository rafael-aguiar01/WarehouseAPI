import { Address } from "@modules/warehouse/infra/typeorm/entities/Address";    

interface ICreateAddressDTO{
    name: string;
}

interface IAddressRepository {
    findByName(name: string): Promise<Address>;
    create({name}: ICreateAddressDTO): Promise<void>;
}

export { ICreateAddressDTO, IAddressRepository }