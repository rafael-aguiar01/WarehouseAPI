import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateNewProductUseCase } from "./CreateProductUseCase";

let createNewProductUseCase: CreateNewProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe ('Create Product', () => {

    beforeEach(() => {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createNewProductUseCase = new CreateNewProductUseCase(
            productsRepositoryInMemory
        );
    })

    it('should be able to create a new product', async() =>{
        const product = {
            name: 'Product Test',
            description: 'Production description test'
        };

        await createNewProductUseCase.execute({
            name: product.name,
            description: product.description
        })
        
        const productCreated = await productsRepositoryInMemory.findByName(
            product.name,
        )

        expect(productCreated).toHaveProperty('id')
    })
});