import { Address } from "@modules/warehouse/infra/typeorm/entities/Address";
import { IAddressRepository,  ICreateAddressDTO } from "../IAddresesRepository";

class AddressRepositoryInMemory implements IAddressRepository {

    addreses: Address[] = [];

    async create({ name }: ICreateAddressDTO): Promise<void> {
        const address = new Address();

        Object.assign(address, {
            name,
        });

        this.addreses.push(address)
    }
    
    async findByName(name: string): Promise<Address> {
        const address = this.addreses.find((address) => address.name === name);
        return address;
    }

}

export { AddressRepositoryInMemory }