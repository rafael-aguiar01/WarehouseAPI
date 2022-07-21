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
            type: '1',
            unit: '1',
            storehouse: '1',
        };

        await createNewProductUseCase.execute({
            name: product.name,
            type: product.type,
            unit: product.unit,
            storehouse: product.storehouse
        })
        
        const productCreated = await productsRepositoryInMemory.findByName(
            product.name,
        )

        expect(productCreated).toHaveProperty('id')
        expect(productCreated).toHaveProperty('type')
        expect(productCreated).toHaveProperty('unit')
        expect(productCreated).toHaveProperty('storehouse')
    })
});