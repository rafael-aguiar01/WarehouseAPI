import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { AppError } from "@shared/erros/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
    id: string;
}

@injectable()
class DeleteProductUseCase {

    constructor(
        @inject("ProductRepository")
        private productsRepository: IProductsRepository
    ){}

    async execute({ id }: IRequest): Promise<void>{
        const productAlreadyExists = await this.productsRepository.findByID(id);
        if(!productAlreadyExists){
            throw new AppError("Product no exists!");
        }
        this.productsRepository.deleteById({id});
    }
}

export { DeleteProductUseCase }