import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository"
import { AppError } from "@shared/erros/AppError";
import { inject, injectable } from "tsyringe"


interface IRequest{
    id: string
}

@injectable()
class DeleteUnityUseCase {

    constructor(
        @inject("UnitsRepository")
        private unitsRepository: IUnitsRepository
    ){}

    async execute ({ id }: IRequest): Promise<void>{
        const unitAlreadyExists = await this.unitsRepository.findByID(id);
        if(!unitAlreadyExists){
            throw new AppError("Unit no exists!");
        }
        this.unitsRepository.deleteByDescription({ id })
    }
}

export { DeleteUnityUseCase}