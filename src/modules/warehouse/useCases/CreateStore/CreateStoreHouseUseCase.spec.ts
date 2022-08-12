
import { StorehouseRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/StorehousesRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateStorehouseUseCase } from "./CreateStorehouseUseCase";


let createStorehouseUseCase: CreateStorehouseUseCase;
let storeHouseRepositoryInMemory: StorehouseRepositoryInMemory;

describe('Create Storehouse', () => {
    beforeEach(() => {
        storeHouseRepositoryInMemory = new StorehouseRepositoryInMemory();
        createStorehouseUseCase = new CreateStorehouseUseCase(
            storeHouseRepositoryInMemory
        );
    })

    it('should be able to create a new storehouse', async() => {
        const store = {
            name: "Armazem Padrão"
        };

        await createStorehouseUseCase.execute({
            name: store.name,
        })

        const storeCreated = await storeHouseRepositoryInMemory.findByName(
            store.name
        )

        expect(storeCreated).toHaveProperty('id')
    })

    it('should not be able to create a storehouse with exists name', async() => {
        const store = {
            name: "Armazem Padrão"
        };

        await createStorehouseUseCase.execute({
            name: store.name,
        })

        await expect(createStorehouseUseCase.execute({
            name: "Armazem Padrão"
        })
        ).rejects.toEqual(new AppError("StoreHouse already exists!"))
    })

})