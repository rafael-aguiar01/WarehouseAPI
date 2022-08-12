import { Balance } from "@modules/moviment/infra/typeorm/entities/Balance";
import { IBalancesRepository, ICreateBalanceDTO, IFindByProduct, IUpdateBalanceDTO } from "../IBalancesRepository";

class BalancesRepositoryInMemory implements IBalancesRepository {

    balance: Balance[] = [];

    async create({ 
        product_id, 
        balance, 
    }: ICreateBalanceDTO): Promise<void> {
        const balanceItem = new Balance();

        Object.assign(balanceItem, {
            product_id,
            balance
        });

        this.balance.push(balanceItem)
    }

    async list(): Promise<Balance[]> {
        const all = this.balance;
        return all;
    }

    async update({ product_id, balanceUpdated, }: IUpdateBalanceDTO): Promise<void> {
        const balanceUpdate = await this.balance.find((balance) => balance.product_id === product_id);

        balanceUpdate.balance = + balanceUpdated;
        
    }

    async findByProduct({ product_id }: IFindByProduct): Promise<Balance> {
        const balance = this.balance.find((moviment) => moviment.product_id === product_id)

        return balance
    }

}

export { BalancesRepositoryInMemory }