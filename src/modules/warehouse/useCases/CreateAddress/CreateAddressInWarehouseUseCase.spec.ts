
import { AddressRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/AddresesRepositoryInMemory";
import { CreateAddressInWarehouseUseCase } from "./CreateAddressInWarehouseUseCase";

let createAddressInWarehouseUseCase: CreateAddressInWarehouseUseCase;
let addressRepositoryInMemory: AddressRepositoryInMemory;

describe( 'Create Address', () =>{

    beforeEach(() => {
        addressRepositoryInMemory = new AddressRepositoryInMemory();
        createAddressInWarehouseUseCase = new CreateAddressInWarehouseUseCase(
            addressRepositoryInMemory
        );
    })

    it('should be able to creat a new address', async() => {
        const address = {
            name: "12B-X7"
        };

        await createAddressInWarehouseUseCase.execute({
            name: address.name,
        })

        const addressCreated = await addressRepositoryInMemory.findByName(
            address.name
        )

        expect(addressCreated).toHaveProperty('id')
    })

})