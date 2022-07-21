import { UnitsRepositoryInMemory } from "@modules/products/repositories/in-memory/UnitsRepositoryInMemory";
import { CreateUnitUseCase } from "../CreateUnity/CreateUnityUseCase";
import { DeleteUnityUseCase } from "./DeleteUnityUseCase";

let deleteUnityUseCase: DeleteUnityUseCase;
let unitsRepositoryInMemory: UnitsRepositoryInMemory;
let createUnitUseCase: CreateUnitUseCase;

describe('Delete Unit', () =>{


    beforeEach(()=> {
        unitsRepositoryInMemory = new UnitsRepositoryInMemory();
        createUnitUseCase = new CreateUnitUseCase(
            unitsRepositoryInMemory
        );
        deleteUnityUseCase = new DeleteUnityUseCase(
            unitsRepositoryInMemory
        );
    })

    it("should be able to delete a new unit", async() => {
        const unit = {
            description: 'Test'
        };

        await createUnitUseCase.execute({
            description: unit.description
        });
        
        let unitCreated = await unitsRepositoryInMemory.findByDescription(
            unit.description,
        )

        await deleteUnityUseCase.execute({
            id: unitCreated.id
        })

        unitCreated = await unitsRepositoryInMemory.findByDescription(
            unit.description,
        )

        expect(unitCreated).toEqual(undefined)
    })
})