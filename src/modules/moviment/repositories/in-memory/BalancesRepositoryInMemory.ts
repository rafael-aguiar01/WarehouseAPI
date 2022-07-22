import { Balance } from "@modules/moviment/infra/typeorm/entities/Balance";
import { IBalancesRepository, ICreateBalanceDTO } from "../IBalancesRepository";

class BalancesRepositoryInMemory implements IBalancesRepository {
    create({ 
        product_id, 
        product_name, 
        storehouse_description, 
        balance, 
    }: ICreateBalanceDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }


    balance: Balance[] = [];

    async list(): Promise<Balance[]> {
        const all = this.balance;
        return all;
    }

}

export { BalancesRepositoryInMemory }