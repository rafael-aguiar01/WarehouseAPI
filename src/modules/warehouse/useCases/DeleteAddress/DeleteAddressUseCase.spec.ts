import { AddressRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/AddresesRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateAddressUseCase } from "../CreateAddress/CreateAddressUseCase";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase"

let deleteAddressUseCase: DeleteAddressUseCase;
let addresesRepositoryInMemory: AddressRepositoryInMemory;
let createAddressUseCase: CreateAddressUseCase;

describe('Delete Address', () => {
    beforeEach(() => {
        addresesRepositoryInMemory = new AddressRepositoryInMemory();
        deleteAddressUseCase = new DeleteAddressUseCase(
            addresesRepositoryInMemory
        );
        createAddressUseCase = new CreateAddressUseCase(
            addresesRepositoryInMemory
        );
    })

    it('should be able to delete a address', async() => {
        const address = {
            storehouse_id: "12345",
            code: "ABC-12X",
            capacity: 23
        }

        await createAddressUseCase.execute({
            storehouse_id: address.storehouse_id,
            code: address.code,
            capacity: address.capacity
        })

        let addressCreated = await addresesRepositoryInMemory.findByCode(
            address.code
        )

        await deleteAddressUseCase.execute({
            id: addressCreated.id
        })

        addressCreated = await addresesRepositoryInMemory.findByCode(
            address.code
        )

        await expect(addressCreated).toBeFalsy()
    })

    it('should be able to delate a sotrehouse with exists name', async() => {

        await expect(deleteAddressUseCase.execute({
            id: "1234566"
        })).rejects.toEqual(new AppError("Address no exists!"))
    })
})