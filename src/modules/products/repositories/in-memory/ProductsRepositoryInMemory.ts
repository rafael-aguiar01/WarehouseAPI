import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { IProductsRepository, ICreateProductDTO, IDeleteProductDTO } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository{

    products: Product[] = [];

    async create({ description, type_id, unit_id}: ICreateProductDTO): Promise<void>{
        const product = new Product();

        Object.assign(product, {
            description, type_id, unit_id
        });

        this.products.push(product);
    }

    async findByDescription(description: string): Promise<Product> {
        const product = this.products.find((product) => product.description === description);
        return product;
    }
    async findByID(id: string): Promise<Product> {
        const product = this.products.find((product) => product.id === id);
        return product;
    }
    async deleteById({ id }: IDeleteProductDTO): Promise<void> {
        this.products = this.products.filter((product) => product.id !== id)
    }
}

export { ProductsRepositoryInMemory }