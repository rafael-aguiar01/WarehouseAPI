import { IProductsRepository, IDeleteProductDTO, ICreateProductDTO} from "@modules/products/repositories/IProductsRepository";
import { getRepository, Repository } from "typeorm";
import { Product } from "../typeorm/entities/Product";

class ProductRepository
    implements IProductsRepository{
        private repository: Repository<Product>;

        constructor(){
            this.repository = getRepository(Product)
        }
        async findByID(id: string): Promise<Product> {
            const product = await this.repository.findOne({id});
            return product;
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

        async deleteById({ id }: IDeleteProductDTO): Promise<void> {
            await this.repository.delete(id)
        }
    }

export { ProductRepository }

