import { BalancesRepositoryInMemory } from "@modules/moviment/repositories/in-memory/BalancesRepositoryInMemory";
import { MovimentsRepositoryInMemory } from "@modules/moviment/repositories/in-memory/MovimentsRepositoryInMemory";
import { CreateMovimentUseCase } from "./CreateMovimentUseCase";

let createMovimentUseCase: CreateMovimentUseCase;
let movimentsRepositoryInMemory: MovimentsRepositoryInMemory;
let balancesRepositoryInMemory: BalancesRepositoryInMemory;


describe('Create Moviment', () => {
    beforeEach(() => {
        movimentsRepositoryInMemory = new MovimentsRepositoryInMemory();
        balancesRepositoryInMemory = new BalancesRepositoryInMemory();
        createMovimentUseCase = new CreateMovimentUseCase(
            movimentsRepositoryInMemory,
            balancesRepositoryInMemory
        );
    })

    it('should be able to create a new Moviment', async () => {
        const moviment = {
            entrance: true,
            type_moviment: "SAIDA",
            product_id: "Peça",
            quantity: 2,
            address_id: "XR123"
        };

        await createMovimentUseCase.execute({
            entrance: moviment.entrance,
            product_id: moviment.product_id,
            quantity: moviment.quantity,
            address_id: moviment.address_id
        })

        const movimentCreated = await movimentsRepositoryInMemory.balancesrepositoryInMemory
        
        expect(movimentCreated).toHaveProperty('balance')
    })
});