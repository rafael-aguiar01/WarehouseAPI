import { UnitsRepositoryInMemory } from "@modules/products/repositories/in-memory/UnitsRepositoryInMemory";
import { CreateUnitUseCase } from "./CreateUnityUseCase";

let createUnitUseCase: CreateUnitUseCase;
let unitsRepositoryInMemory: UnitsRepositoryInMemory;

describe ('Create Unit', () => {

    beforeEach(()=> {
        unitsRepositoryInMemory = new UnitsRepositoryInMemory();
        createUnitUseCase = new CreateUnitUseCase(
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

        // it('should be able to delete a new unit', async () => {
    //     const unitCreated = [];
        
    //     expect(unitCreated).toHaveProperty('id')

    // })

    // it('should be able to edit a new unit', async () => {
    //     const unitCreated = [];
        
    //     expect(unitCreated).toHaveProperty('id')

    // })


    it('should not be able create unit that already exists', async () => {
        const unit = {
            description: 'Test'
        };

        await createUnitUseCase.execute({
            description: unit.description
        });

        await expect(createUnitUseCase.execute({
            description: unit.description
        })
        ).rejects.toEqual(new Error('Unit already exists!'));
    })

    // it('should not be able delete unit that already used', async () => {
    //     const unitCreated = [];
        
    //     expect(unitCreated).toHaveProperty('id')

    // })



})