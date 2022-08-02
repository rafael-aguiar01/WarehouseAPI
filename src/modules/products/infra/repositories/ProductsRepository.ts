import { IProductsRepository} from "@modules/products/repositories/IProductsRepository";
import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "@modules/products/repositories/IProductsRepository";
import { Product } from "../typeorm/entities/Product";

class ProductRepository
    implements IProductsRepository{
        private repository: Repository<Product>;

        constructor(){
            this.repository = getRepository(Product)
        }

        async findByDescription(description: string): Promise<Product> {
            const product = await this.repository.findOne({description})
            return product;
        }

        async create({ 
            description, 
            type_id, 
            unit_id
        }: ICreateProductDTO): Promise<void> {
            const product = this.repository.create({
                description, 
                type_id, 
                unit_id 
            });
            await this.repository.save(product)
        }
    }

export { ProductRepository }

