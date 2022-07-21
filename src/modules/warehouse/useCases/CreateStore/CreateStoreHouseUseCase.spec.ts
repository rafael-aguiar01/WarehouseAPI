import { StorehouseRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/StoreHousesRepositoryInMemory";
import { CreateStoreHouseUseCase } from "./CreateStoreHouseUseCase";


let createStoreHouseUseCase: CreateStoreHouseUseCase;
let storeHouseRepositoryInMemory: StorehouseRepositoryInMemory;

describe('Create Store', () => {
    beforeEach(() => {
        storeHouseRepositoryInMemory = new StorehouseRepositoryInMemory();
        createStoreHouseUseCase = new CreateStoreHouseUseCase(
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