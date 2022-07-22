import { IMovimentsRepository } from "@modules/moviment/repositories/IMovimentsRepository";


interface IRequest {
    description: string;
    type_moviment: string;
    product_id: string;
    quantity: number;
    address_id: string
}

class CreateMovimentUseCase {

    constructor(
        private movimentsRepository: IMovimentsRepository
    ){}

    async execute ({ 
      description, 
      type_moviment, 
      product_id, 
      quantity, 
      address_id
    }: IRequest): Promise<void>{
        this.movimentsRepository.create({
            description, 
            type_moviment, 
            product_id, 
            quantity, 
            address_id
        })
    }

}

export { CreateMovimentUseCase }