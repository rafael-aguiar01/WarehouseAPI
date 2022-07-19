import { IAddressRepository } from "@modules/warehouse/repositories/in-memory/IAddresesRepository";

interface IRequest {
    name: string;
}

class CreateAddressInWarehouseUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){ }

    async execute ({name}: IRequest): Promise<void>{
        this.addressRepository.create({ name })
    }
}

export { CreateAddressInWarehouseUseCase }