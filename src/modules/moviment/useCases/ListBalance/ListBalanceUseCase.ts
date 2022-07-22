import { Balance } from "@modules/moviment/infra/typeorm/entities/Balance";
import { IBalancesRepository } from "@modules/moviment/repositories/IBalancesRepository";



class ListBalanceUseCase {
    constructor (
        private balanceRepository: IBalancesRepository
    ){}

    async execute(): Promise<Balance[]> {
        const balance = await this.balanceRepository.list();

        return balance;
    }
}

export { ListBalanceUseCase }