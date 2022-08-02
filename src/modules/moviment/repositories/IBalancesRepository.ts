import { Balance } from "../infra/typeorm/entities/Balance";

interface ICreateBalanceDTO{
    product_id: string;
    balance: number;
}

interface IUpdateBalanceDTO{
    product_id: string;
    balanceUpdated: number;
}

interface IFindByProduct{
    product_id: string;
}

interface IBalancesRepository{
    list(): Promise<Balance[]>
    create({ 
        product_id,
        balance,
    }:ICreateBalanceDTO ):Promise<void>
    update({
        product_id,
        balanceUpdated,
    }:IUpdateBalanceDTO ):Promise<void>
    findByProduct({product_id}:IFindByProduct):Promise<Balance>
}

export { IBalancesRepository, ICreateBalanceDTO, IUpdateBalanceDTO, IFindByProduct}