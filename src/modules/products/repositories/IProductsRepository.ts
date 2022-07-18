import { Product } from "../infra/typeorm/entities/Product"; 

interface ICreateProductDTO{
    name: string;
    description: string;
}

interface IProductsRepository{
    findByName(name: string): Promise<Product>;
    create ({name, description}: ICreateProductDTO): Promise<void>;
}


export { IProductsRepository, ICreateProductDTO }