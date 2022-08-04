import { ITypesRepository } from "@modules/products/repositories/ITypesRepository";
import { AppError } from "@shared/erros/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest{
    id: string;
}

@injectable()
class DeleteTypeUseCase {

    constructor(
        @inject("TypesRepository")  
        private typesRepository: ITypesRepository
    ){}

    async execute ({ id }: IRequest): Promise<void>{
        const typeAlreadyExists = await this.typesRepository.findByID(id);
        if(!typeAlreadyExists){
            throw new AppError("Type no exists!");
        }
        this.typesRepository.deleteByDescription({id});
    }
}

export { DeleteTypeUseCase }