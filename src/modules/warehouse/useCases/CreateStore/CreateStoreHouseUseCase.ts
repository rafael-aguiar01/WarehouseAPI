import { IStorehouseRepository } from "@modules/warehouse/repositories/IStorehousesRepository";
import { AppError } from "shared/erros/AppError";
import { inject, injectable } from 'tsyringe';

interface IRequest {
    name: string;
}

@injectable()
class CreateStorehouseUseCase {
    constructor(
        @inject("StorehouseRepository")
        private storehouseRepository: IStorehouseRepository
    ){}

    async execute ({ name }: IRequest): Promise<void>{
        const storehouseAlreadyExists = await this.storehouseRepository.findByName(name);

        if(storehouseAlreadyExists){
            throw new AppError ("StoreHouse already exists!")
        }

        this.storehouseRepository.create({ name })
    }
}

export { CreateStorehouseUseCase }