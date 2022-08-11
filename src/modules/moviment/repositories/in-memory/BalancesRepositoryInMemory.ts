import { Balance } from "@modules/moviment/infra/typeorm/entities/Balance";
import { IBalancesRepository, ICreateBalanceDTO, IFindByProduct, IUpdateBalanceDTO } from "../IBalancesRepository";

class BalancesRepositoryInMemory implements IBalancesRepository {
    update({ product_id, balanceUpdated, }: IUpdateBalanceDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByProduct({ product_id }: IFindByProduct): Promise<Balance> {
        throw new Error("Method not implemented.");
    }
    create({ 
        product_id, 
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