import { IStoreHouseRepository } from "@modules/warehouse/repositories/IStoreHousesRepository";
import { AppError } from "shared/erros/AppError";
import { inject, injectable } from 'tsyringe';

interface IRequest {
    name: string;
}

@injectable()
class CreateStoreHouseUseCase {
    constructor(
        @inject("StoreHouseRepository")
        private storeHouseRepository: IStoreHouseRepository
    ){}

    async execute ({ name }: IRequest): Promise<void>{
        const storeHouseAlreadyExists = await this.storeHouseRepository.findByName(name);

        if(storeHouseAlreadyExists){
            throw new AppError ("StoreHouse already exists!")
        }

        this.storeHouseRepository.create({ name })
    }
}

export { CreateStoreHouseUseCase }