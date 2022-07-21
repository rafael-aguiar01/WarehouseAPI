import { IMovimentTypesRepository } from "@modules/moviment/repositories/IMovimentTypes";

interface IRequest {
    description: string;
    type: string;
}

class CreateMovimentTypeUseCase {

    constructor(
        private movimentTypeRepository: IMovimentTypesRepository
    ){}

    async execute ({description, type}: IRequest): Promise<void>{
        this.movimentTypeRepository.create({ description, type})
    }
}

export { CreateMovimentTypeUseCase }