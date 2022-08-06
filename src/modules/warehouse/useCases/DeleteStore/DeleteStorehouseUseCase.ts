import { IStorehouseRepository } from "@modules/warehouse/repositories/IStoreHousesRepository";
import { AppError } from "@shared/erros/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    id: string;
}

@injectable()
class DeleteStorehouseUseCase {
    constructor(
        @inject("StorehouseRepository")
        private storehouseRepository: IStorehouseRepository
    ){}

    async execute ({ id }: IRequest): Promise<void>{
        const storehouseAlreadyExists = await this.storehouseRepository.findById(id);
        if(!storehouseAlreadyExists){
            throw new AppError("Storehouse no exists!");
        }
        this.storehouseRepository.deleteById({ id })
    }
}

export { DeleteStorehouseUseCase }