import { Product } from "../infra/typeorm/entities/Product";
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';

interface IDeleteProductDTO{
    id: string;
}

interface IProductsRepository{
    findByDescription(description: string): Promise<Product>;
    findByID(id: string): Promise<Product>;
    create (data: ICreateProductDTO): Promise<void>;
    deleteById({ id }: IDeleteProductDTO): Promise<void>;
}

export { IProductsRepository, ICreateProductDTO, IDeleteProductDTO }