import { StorehouseRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/StorehousesRepositoryInMemory";
import { CreateStorehouseUseCase } from "./CreateStorehouseUseCase";


let createStoreHouseUseCase: CreateStorehouseUseCase;
let storeHouseRepositoryInMemory: StorehouseRepositoryInMemory;

describe('Create Store', () => {
    beforeEach(() => {
        storeHouseRepositoryInMemory = new StorehouseRepositoryInMemory();
        createStoreHouseUseCase = new CreateStorehouseUseCase(
            storeHouseRepositoryInMemory
        );
    })

    it('should be able to create a new store', async() => {
        const store = {
            name: "Armazem Padrão"
        };

        await createStoreHouseUseCase.execute({
            name: store.name,
        })

        const storeCreated = await storeHouseRepositoryInMemory.findByName(
            store.name
        )

        expect(storeCreated).toHaveProperty('id')
    })
})