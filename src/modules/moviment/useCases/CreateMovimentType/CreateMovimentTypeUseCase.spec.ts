import { MovimentTypeRespositoryInMemory } from "@modules/moviment/repositories/in-memory/MovimentsTypesRepositoryInMemory";
import { CreateMovimentTypeUseCase } from "./CreateMovimentTypeUseCase";

let createMovimentTypeUseCase: CreateMovimentTypeUseCase;
let movimentTypeInMemory: MovimentTypeRespositoryInMemory;

describe( 'Create Type Moviment', () => {

    beforeEach(() => {
        movimentTypeInMemory = new MovimentTypeRespositoryInMemory();
        createMovimentTypeUseCase = new CreateMovimentTypeUseCase(
            movimentTypeInMemory
        );
    })

    it('should be able to create a new Type Moviment', async() => {
        const movimentType = {
            description: "132321",
            type: "1234"
        };

        await createMovimentTypeUseCase.execute({
            description: movimentType.description,
            type: movimentType.type
        })

        const movimentTypeCreated = await movimentTypeInMemory.findByName(
            movimentType.description
        )

        expect(movimentTypeCreated).toHaveProperty('id')

    })
})

