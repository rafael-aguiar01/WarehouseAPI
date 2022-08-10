import { StorehouseRepositoryInMemory } from "@modules/warehouse/repositories/in-memory/StorehousesRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateStorehouseUseCase } from "../CreateStore/CreateStorehouseUseCase";
import { DeleteStorehouseUseCase } from "./DeleteStorehouseUseCase";

let deleteStorehouseUseCase: DeleteStorehouseUseCase;
let storeHouseRepositoryInMemory: StorehouseRepositoryInMemory;
let createStorehouseUseCase: CreateStorehouseUseCase;

describe('Delete Storehouse', () => {
    beforeEach(() => {
        storeHouseRepositoryInMemory = new StorehouseRepositoryInMemory();
        deleteStorehouseUseCase = new DeleteStorehouseUseCase(
            storeHouseRepositoryInMemory
        );
        createStorehouseUseCase = new CreateStorehouseUseCase(
            storeHouseRepositoryInMemory
        );
    })

    it('should be able to delete a storehouse', async() => {
        const store = {
            name: "Armazem Padrão"
        };

        await createStorehouseUseCase.execute({
            name: store.name,
        });

        let storeCreated = await storeHouseRepositoryInMemory.findByName(
            store.name
        )
        
        await deleteStorehouseUseCase.execute({
            id: storeCreated.id
        })

        storeCreated = await storeHouseRepositoryInMemory.findByName(
            store.name
        )

        await expect(storeCreated).toBeFalsy()
    })

    it('should not be able to delete a storehouse with exists name', async() => {

        await expect(deleteStorehouseUseCase.execute({
            id: "123132123"
        })).rejects.toEqual(new AppError("Storehouse no exists!"))
    })

})