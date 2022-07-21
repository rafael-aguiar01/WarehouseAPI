import { IUnitsRepository } from "@modules/products/repositories/IUnitsRepository"


interface IRequest{
    id: string
}

class DeleteUnityUseCase {

    constructor(
        private unitsRepository: IUnitsRepository
    ){}

    async execute ({ id }: IRequest): Promise<void>{
        this.unitsRepository.delete({ id })
    }
}


export { DeleteUnityUseCase}