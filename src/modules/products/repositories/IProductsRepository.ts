import { Product } from "../infra/typeorm/entities/Product";
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO'

interface IProductsRepository{
    findByDescription(description: string): Promise<Product>;
    create (data: ICreateProductDTO): Promise<void>;
}

export { IProductsRepository, ICreateProductDTO }