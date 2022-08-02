import { IBalancesRepository, ICreateBalanceDTO, IUpdateBalanceDTO, IFindByProduct } from "@modules/moviment/repositories/IBalancesRepository";
import { getRepository, Repository } from "typeorm";
import { Balance } from "../entities/Balance";

class BalancesRepository
    implements IBalancesRepository{
        private repository: Repository<Balance>;

        constructor(){
            this.repository = getRepository(Balance);
        }


        list(): Promise<Balance[]> {
            return 
        }
        async create({ product_id, balance, }: ICreateBalanceDTO): Promise<void> {
            const balanceOfProduct = this.repository.create({
                product_id,
                balance
            });
            await this.repository.save(balanceOfProduct);
        }

        async update({ product_id, balanceUpdated }: IUpdateBalanceDTO): Promise<void> {
           const balanceUpdate = await this.repository.findOne({
                product_id
           });

           balanceUpdate.balance = +balanceUpdated;
           await this.repository.save(balanceUpdate);
        }
        
        async findByProduct({ product_id }: IFindByProduct): Promise<Balance> {
            const balance = await this.repository.findOne({product_id})
            return balance
        }
    }

    export { BalancesRepository }