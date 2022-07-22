import { Balance } from "../infra/typeorm/entities/Balance";

interface IBalancesRepository{
    list(): Promise<Balance[]>
}

export { IBalancesRepository}