import { IBalancesRepository } from "@modules/moviment/repositories/IBalancesRepository";
import { IMovimentsRepository } from "@modules/moviment/repositories/IMovimentsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    entrance: boolean;
    product_id: string;
    quantity: number;
    address_id: string
}

@injectable()
class CreateMovimentUseCase {

    constructor(
        @inject("MovimentsRepository")
        private movimentsRepository: IMovimentsRepository,
        @inject("BalancesRepository")
        private balancesRepository: IBalancesRepository
    ){}

    async execute ({ 
        entrance, 
        product_id, 
        quantity, 
        address_id 
    }: IRequest): Promise<void>{

        this.movimentsRepository.create({
            entrance, 
            product_id, 
            quantity, 
            address_id 
        })

        const balanceAlreadyExists = await this.balancesRepository.findByProduct({product_id});

        if(balanceAlreadyExists && entrance){
            let balanceActual = balanceAlreadyExists.balance
           
            const balanceUpdated = quantity += Number(balanceActual)
            await this.balancesRepository.update({
                product_id, 
                balanceUpdated
            })
        }
        if(balanceAlreadyExists && !entrance){
            let balanceActual = balanceAlreadyExists.balance
        
            const balanceUpdated = balanceActual -= quantity 
            await this.balancesRepository.update({
                product_id, 
                balanceUpdated
            }) 
        }
        if(!balanceAlreadyExists){
            await this.balancesRepository.create({
                product_id, 
                balance: quantity
            })
        }
    }
}
export { CreateMovimentUseCase }