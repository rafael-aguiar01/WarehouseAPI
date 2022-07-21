import { IStoreHouseRepository } from "@modules/warehouse/repositories/IStoreHousesRepository";


interface IRequest {
    name: string;
}

class CreateStoreHouseUseCase {

    constructor(
        private storehouseRepository: IStoreHouseRepository
    ){}

    async execute ({ name }: IRequest): Promise<void>{
        this.storehouseRepository.create({ name })
    }
}

export { CreateStoreHouseUseCase }