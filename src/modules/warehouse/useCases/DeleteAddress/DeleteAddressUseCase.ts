import { IAddressRepository } from "@modules/warehouse/repositories/IAddresesRepository";
import { AppError } from "@shared/erros/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest{
    id: string;
}

@injectable()
class DeleteAddressUseCase {

    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ){}

    async execute ({ id }: IRequest): Promise<void>{
        const addressAlreadyExists = await this.addressRepository.findByID(id);
        if(!addressAlreadyExists){
            throw new AppError("Address no exists!");
        }
        this.addressRepository.deleteById({ id });
    }
}

export { DeleteAddressUseCase }