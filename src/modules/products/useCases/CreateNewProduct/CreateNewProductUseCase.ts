import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateNewProductUseCase {

    constructor(
        private productsRepository: IProductsRepository
    ){}
    
    async execute({ description, name}: IRequest): Promise<void>{
        this.productsRepository.create( { name, description });
    }
}

export { CreateNewProductUseCase }