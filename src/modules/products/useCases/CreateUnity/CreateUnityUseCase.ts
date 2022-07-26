import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/erros/AppError';
import { IUnitsRepository } from '@modules/products/repositories/IUnitsRepository'

interface IRequest {
    description: string;
}

@injectable()
class CreateUnityUseCase {
    constructor(
        @inject("UnitsRepository")
        private unitsRepository: IUnitsRepository
    ){}

    async execute ({ description}: IRequest): Promise<void>{
        const unitAlreadyExists = await this.unitsRepository.findByDescription(description);

        if(unitAlreadyExists){
           throw new AppError ("Unit already exists!")
        }

        this.unitsRepository.create({ description });
    }
}


export { CreateUnityUseCase }