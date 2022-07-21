import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";


interface IRequest {
    description: string;
}

class CreateProductTypeUseCase {

    constructor(
        private typesRepository: ITypesRepository
    ){}

    async execute({ description}: IRequest): Promise<void>{
        this.typesRepository.create({description})
    }
}

export { CreateProductTypeUseCase }