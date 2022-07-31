import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/erros/AppError";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

interface IRequest {
    description: string;
    type_id: string;
    unit_id: string;
}

@injectable()
class CreateProductUseCase {

    constructor(
        @inject("ProductRepository")
        private productsRepository: IProductsRepository
    ){}
    
    async execute({description, type_id, unit_id}: IRequest): Promise<void>{
        const productAlreadyExists = await this.productsRepository.findByDescription(description);
        if(productAlreadyExists){
            throw new AppError("Product already exists!")
        }
        this.productsRepository.create( { description, type_id, unit_id});
    }
}

export { CreateProductUseCase }