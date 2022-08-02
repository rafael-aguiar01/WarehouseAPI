import { IAddressRepository } from "@modules/warehouse/repositories/IAddresesRepository";
import { getRepository, Repository } from "typeorm";
import { ICreateAddressDTO } from "@modules/warehouse/repositories/IAddresesRepository";
import { Address } from "../typeorm/entities/Address";

class AddressRepository
    implements IAddressRepository{
        private repository: Repository<Address>;

        constructor(){
            this.repository = getRepository(Address)
        }

    async findByCode(code: string): Promise<Address> {
       const address = await this.repository.findOne({code})
       return address;
    }

    async create({ 
        storehouse_id, 
        code, 
        capacity 
    }: ICreateAddressDTO): Promise<void> {
        const address = this.repository.create({
            storehouse_id,
            code,
            capacity
        })

        await this.repository.save(address)
    }
        
    }

export { AddressRepository }