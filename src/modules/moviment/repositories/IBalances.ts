import { Balance } from "../infra/typeorm/entities/Balance";

interface ICreateBalanceDTO{
    product_id: string;
    product_name: string;
    storehouse_description: string;
    type: string;
}

interface IBalancesRepository{
    list()
}

export { ICreateBalanceDTO}