import { ICreateMovimentDTO, IMovimentsRepository } from "@modules/moviment/repositories/IMovimentsRepository";
import { getRepository, Repository } from "typeorm";
import { Moviment } from "../entities/Moviment";

class MovimentsRepository
    implements IMovimentsRepository{
        private repository: Repository<Moviment>;

        constructor(){
            this.repository = getRepository(Moviment)
        }

        async findById(id: string): Promise<Moviment> {
            const moviment = await this.repository.findOne({ id })
            return moviment
        }

        async create({ 
            entrance, 
            product_id, 
            quantity, 
            address_id 
        }: ICreateMovimentDTO): Promise<void> {
            const moviment = this.repository.create({
                entrance, 
                product_id, 
                quantity, 
                address_id 
            });

            await this.repository.save(moviment)
        }
        
    }

export { MovimentsRepository }