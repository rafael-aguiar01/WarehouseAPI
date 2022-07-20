import { IUnitsRepository } from '@modules/products/repositories/IUnitsRepository'

interface IRequest {
    description: string;
}

class CreateUnitUseCase {

    constructor(
        private unitsRepository: IUnitsRepository
    ){}

    async execute ({ description}: IRequest): Promise<void>{
        const unitAlreadyExists = await this.unitsRepository.findByDescription(description);

        if(unitAlreadyExists){
           throw new Error ("Unit already exists!")
        }

        this.unitsRepository.create({ description });
    }
}


export { CreateUnitUseCase }