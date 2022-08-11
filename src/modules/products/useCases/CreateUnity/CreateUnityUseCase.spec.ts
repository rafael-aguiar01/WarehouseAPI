import { UnitsRepositoryInMemory } from "@modules/products/repositories/in-memory/UnitsRepositoryInMemory";
import { CreateUnityUseCase } from "./CreateUnityUseCase";
import { AppError } from "@shared/erros/AppError";

let createUnitUseCase: CreateUnityUseCase;
let unitsRepositoryInMemory: UnitsRepositoryInMemory;

describe ('Create Unit', () => {

    beforeEach(()=> {
        unitsRepositoryInMemory = new UnitsRepositoryInMemory();
        createUnitUseCase = new CreateUnityUseCase(
            unitsRepositoryInMemory
        );
    })

    it('should be able to create a new unit', async () => {
        const unit = {
            description: 'Test'
        };

        await createUnitUseCase.execute({
            description: unit.description
        });
        
        const unitCreated = await unitsRepositoryInMemory.findByDescription(
            unit.description,
        )

        expect(unitCreated).toHaveProperty('id')
    })

    it('should not be able create unit that already exists', async () => {
        const unit = {
            description: 'Test'
        };

        await createUnitUseCase.execute({
            description: unit.description
        });

        await expect(createUnitUseCase.execute({
            description: 'Test'
        })
        ).rejects.toEqual(new AppError("Unit already exists!"));
    })

})