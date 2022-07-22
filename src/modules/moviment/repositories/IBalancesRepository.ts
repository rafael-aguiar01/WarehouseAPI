import { Balance } from "../infra/typeorm/entities/Balance";

interface ICreateBalanceDTO{
    product_id: string;
    product_name: string;
    storehouse_description: string;
    balance: number;
}
interface IBalancesRepository{
    list(): Promise<Balance[]>
    create({ 
        product_id,
        product_name,
        storehouse_description,    
        balance,
    }:ICreateBalanceDTO ):Promise<void>
}

export { IBalancesRepository, ICreateBalanceDTO}