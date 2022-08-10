import { IAddressRepository } from "@modules/warehouse/repositories/IAddresesRepository";
import { AppError } from "@shared/erros/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
    storehouse_id: string;
    code: string;
    capacity: number;
}

@injectable()
class CreateAddressUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ){}

    async execute ({storehouse_id, code, capacity}: IRequest): Promise<void>{
        const addressAlreadyExists = await this.addressRepository.findByCode(code)
        if(addressAlreadyExists){
            throw new AppError("Address already exists!")
        }
        this.addressRepository.create({storehouse_id, code, capacity})
    }
}

export { CreateAddressUseCase }