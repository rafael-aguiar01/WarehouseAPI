import { Moviment } from "@modules/moviment/infra/typeorm/entities/Moviment";
import { ICreateMovimentDTO, IMovimentsRepository } from "../IMovimentsRepository";

class MovimentsRepositoryInMemory implements IMovimentsRepository {
    moviments: Moviment[] = []

    async create({  description,
                    type_moviment, 
                    product_id, 
                    quantity, 
                    address_id
        }: ICreateMovimentDTO): Promise<void> {
        const moviment = new Moviment();

        Object.assign(moviment, {
            description, 
            type_moviment, 
            product_id, 
            quantity, 
            address_id
        });

        this.moviments.push(moviment)
    }

    async findByDescription(description: string): Promise<Moviment> {
        const moviment = this.moviments.find((moviment) => moviment.description === description);
        return moviment;
    }
}

export { MovimentsRepositoryInMemory}