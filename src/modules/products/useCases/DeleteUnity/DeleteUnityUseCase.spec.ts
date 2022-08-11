import { UnitsRepositoryInMemory } from "@modules/products/repositories/in-memory/UnitsRepositoryInMemory";
import { CreateUnityUseCase } from "../CreateUnity/CreateUnityUseCase";
import { DeleteUnityUseCase } from "./DeleteUnityUseCase";
import { AppError } from "@shared/erros/AppError";

let deleteUnityUseCase: DeleteUnityUseCase;
let unitsRepositoryInMemory: UnitsRepositoryInMemory;
let createUnitUseCase: CreateUnityUseCase;

describe('Delete Unit', () =>{


    beforeEach(()=> {
        unitsRepositoryInMemory = new UnitsRepositoryInMemory();
        createUnitUseCase = new CreateUnityUseCase(
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


    it('should not be able to delete a unity with exists name', async() => {

        await expect(deleteUnityUseCase.execute({
            id: "123132123"
        })).rejects.toEqual(new AppError("Unit no exists!"))
    })
})