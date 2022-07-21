import { Product } from "../infra/typeorm/entities/Product"; 

interface ICreateProductDTO{
    name: string;
    type: string;
    unit: string;
    storehouse: string
}

interface IProductsRepository{
    findByName(name: string): Promise<Product>;
    create ({name, type, unit, storehouse}: ICreateProductDTO): Promise<void>;
}


export { IProductsRepository, ICreateProductDTO }