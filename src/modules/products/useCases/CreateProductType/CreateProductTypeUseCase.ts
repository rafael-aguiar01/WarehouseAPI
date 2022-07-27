import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/erros/AppError";
import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";

interface IRequest {
    description: string;
}

@injectable()
class CreateProductTypeUseCase {
    constructor(
        @inject("TypesRepository")
        private typesRepository: ITypesRepository
    ){}

    async execute({ description}: IRequest): Promise<void>{
        const typeAlreadyExists = await this.typesRepository.findByDescription(description);

        if(typeAlreadyExists){
            throw new AppError ("Type already exists!")
        }
        
        this.typesRepository.create({description})
    }
}

export { CreateProductTypeUseCase }