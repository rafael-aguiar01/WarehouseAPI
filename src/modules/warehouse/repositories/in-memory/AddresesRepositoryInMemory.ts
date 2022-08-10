import { Address } from "@modules/warehouse/infra/typeorm/entities/Address";
import { IAddressRepository,  ICreateAddressDTO, IDeleteAddressDTO } from "../IAddresesRepository";

class AddressRepositoryInMemory implements IAddressRepository {

    addreses: Address[] = [];

    async create({ storehouse_id, code, capacity  }: ICreateAddressDTO): Promise<void> {
        const address = new Address();

        Object.assign(address, {
            storehouse_id,
            code,
            capacity
        });

        this.addreses.push(address);
    }
    async findByCode(code: string): Promise<Address> {
        const address = this.addreses.find((address) => address.code === code);
        return address;
    }
    async findByID(id: string): Promise<Address> {
        const address = this.addreses.find((address) => address.id === id);
        return address;
    }
    async deleteById({ id }: IDeleteAddressDTO): Promise<void> {
        this.addreses = this.addreses.filter((adress) => adress.id !== id)
    }


}

export { AddressRepositoryInMemory }