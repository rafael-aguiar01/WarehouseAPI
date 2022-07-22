import { Balance } from "@modules/moviment/infra/typeorm/entities/Balance";
import { IBalancesRepository } from "../IBalancesRepository";

class BalancesRepositoryInMemory implements IBalancesRepository {

    balance: Balance[] = [];

    async list(): Promise<Balance[]> {
        const all = this.balance;
        return all;
    }

}

export { BalancesRepositoryInMemory }