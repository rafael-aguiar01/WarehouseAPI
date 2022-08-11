import { Moviment } from "@modules/moviment/infra/typeorm/entities/Moviment";
import { ICreateMovimentDTO, IMovimentsRepository } from "../IMovimentsRepository";
import { BalancesRepositoryInMemory } from "./BalancesRepositoryInMemory";

class MovimentsRepositoryInMemory implements IMovimentsRepository {
    moviments: Moviment[] = []
    balancesrepositoryInMemory = new BalancesRepositoryInMemory()
    
    async create({  entrance,
                    product_id, 
                    quantity, 
                    address_id
        }: ICreateMovimentDTO): Promise<void> {
        const moviment = new Moviment();

        Object.assign(moviment, {
            entrance, 
            product_id, 
            quantity, 
            address_id
        });

        this.moviments.push(moviment)
        
    }

    async findById(id: string): Promise<Moviment> {
       const moviment = this.moviments.find((moviment) => moviment.id === id)
       return moviment
    }
}

export { MovimentsRepositoryInMemory}