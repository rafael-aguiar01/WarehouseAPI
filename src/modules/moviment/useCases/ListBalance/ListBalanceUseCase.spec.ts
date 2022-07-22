import { BalancesRepositoryInMemory } from "@modules/moviment/repositories/in-memory/BalancesRepositoryInMemory";
import { ListBalanceUseCase } from "./ListBalanceUseCase";


let listBalanceUseCase: ListBalanceUseCase
let balanceRepository: BalancesRepositoryInMemory

describe( 'List Balance', () => {
    beforeEach(() => {
        balanceRepository = new BalancesRepositoryInMemory();
        listBalanceUseCase = new ListBalanceUseCase(balanceRepository);
    })

    it('should be able to list the balance', async() => {

        const balance = []

        expect(balance).toEqual([])
    })
})