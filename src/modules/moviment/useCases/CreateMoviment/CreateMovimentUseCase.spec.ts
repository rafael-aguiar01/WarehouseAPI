import { MovimentsRepositoryInMemory } from "@modules/moviment/repositories/in-memory/MovimentsRepositoryInMemory";
import { CreateMovimentUseCase } from "./CreateMovimentUseCase";

let createMovimentUseCase: CreateMovimentUseCase;
let movimentsRepositoryInMemory: MovimentsRepositoryInMemory;

describe('Create Moviment', () => {
    beforeEach(() => {
        movimentsRepositoryInMemory = new MovimentsRepositoryInMemory();
        createMovimentUseCase = new CreateMovimentUseCase(
            movimentsRepositoryInMemory
        );
    })

    it('should be able to create a new Moviment', async () => {
        const moviment = {
            description: "Venda",
            type_moviment: "SAIDA",
            product_id: "Peça",
            quantity: 2,
            address_id: "XR123"
        };

        await createMovimentUseCase.execute({
            description: moviment.description,
            type_moviment: moviment.type_moviment,
            product_id: moviment.product_id,
            quantity: moviment.quantity,
            address_id: moviment.address_id
        })

        const movimentCreated = await movimentsRepositoryInMemory.findByDescription(
            moviment.description
        )

        expect(movimentCreated).toHaveProperty('id')
    })
});