import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository, ICreateProductDTO } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository{

    products: Product[] = [];

    async create({ name, description}: ICreateProductDTO): Promise<void>{
        const product = new Product();

        Object.assign(product, {
            name, description
        });

        this.products.push(product);
    }

    async findByName(name: string): Promise<Product> {
        const product = this.products.find((product) => product.name === name);
        return product;
    }
}

export { ProductsRepositoryInMemory }