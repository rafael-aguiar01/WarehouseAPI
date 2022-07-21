import { TypesRepositoryInMemory } from "@modules/products/repositories/in-memory/TypesRepositoryInMemory";
import { CreateProductTypeUseCase } from "./CreateProductTypeUseCase";

let createProductTypeUseCase: CreateProductTypeUseCase;
let typesRepositoryInMemory: TypesRepositoryInMemory;

describe('Create Product Type', () => {

    beforeEach(()=> {
        typesRepositoryInMemory = new TypesRepositoryInMemory();
        createProductTypeUseCase = new CreateProductTypeUseCase(
            typesRepositoryInMemory
        );
    })

    it('should be able to create a new product type', async() =>{
        const type = {
            description: 'Test'
        };

        await createProductTypeUseCase.execute({
            description: type.description
        });

        const productTypeCreated = await typesRepositoryInMemory.findByDescription(
            type.description
        )

        expect(productTypeCreated).toHaveProperty('id')

    })
})