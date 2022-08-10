
import { AddressRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/AddresesRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

let createAddressUseCase: CreateAddressUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe( 'Create Address', () =>{

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAddressUseCase = new CreateAddressUseCase(
            addressRepositoryInMemory
        );
    })

    it('should be able to create a new address', async() => {
        const address = {
            storehouse_id: "12345",
            code: "12B-X7",
            capacity: 55
        };

        await createAddressUseCase.execute({
            storehouse_id: address.storehouse_id,
            code: address.code,
            capacity: address.capacity
        })

        const addressCreated = await addressRepositoryInMemory.findByCode(
            address.code
        )

        expect(addressCreated).toHaveProperty('id')
    })

    it('should not be able to create a address with exists code', async() =>{
        const address = {
            storehouse_id: "12345",
            code: "12B-X7",
            capacity: 55
        };

        await createAddressUseCase.execute({
            storehouse_id: address.storehouse_id,
            code: address.code,
            capacity: address.capacity
        })

        await expect(createAddressUseCase.execute({
            storehouse_id: address.storehouse_id,
            code: address.code,
            capacity: address.capacity
        })
        ).rejects.toEqual(new AppError("Address already exists!"))

    })

})