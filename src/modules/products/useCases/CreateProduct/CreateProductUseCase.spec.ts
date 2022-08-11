import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateProductUseCase } from "./CreateProductUseCase";

let createNewProductUseCase: CreateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe ('Create Product', () => {

    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createNewProductUseCase = new CreateProductUseCase(
            productsRepositoryInMemory
        );
    })

    it('should be able to create a new product', async() =>{
        const product = {
            description: 'Product Test',
            type_id:'1234',
            unit_id:'1222'
        };

        await createNewProductUseCase.execute({
            description: product.description,
            type_id: product.type_id,
            unit_id: product.unit_id
        })
        
        const productCreated = await productsRepositoryInMemory.findByDescription(
            product.description,
        )

        expect(productCreated).toHaveProperty('id')
        expect(productCreated).toHaveProperty('type_id')
        expect(productCreated).toHaveProperty('unit_id')
    })

    it('should not be able to create a product with exists name', async()=> {
        const product = {
            description: 'Product Test',
            type_id:'1234',
            unit_id:'1222'
        };
        await createNewProductUseCase.execute({
            description: product.description,
            type_id: product.type_id,
            unit_id: product.unit_id
        })
        await expect(createNewProductUseCase.execute({
            description: product.description,
            type_id: product.type_id,
            unit_id: product.unit_id
        })).rejects.toEqual(new AppError("Product already exists!"))

    })
});