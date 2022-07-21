import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

interface IRequest {
    name: string;
    type: string;
    unit: string;
    storehouse: string;
}

class CreateNewProductUseCase {

    constructor(
        private productsRepository: IProductsRepository
    ){}
    
    async execute({name, type, unit, storehouse}: IRequest): Promise<void>{
        this.productsRepository.create( { name, type, unit, storehouse  });
    }
}

export { CreateNewProductUseCase }