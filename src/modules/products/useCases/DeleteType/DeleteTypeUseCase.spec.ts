import { TypesRepositoryInMemory } from "@modules/products/repositories/in-memory/TypesRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateProductTypeUseCase } from "../CreateProductType/CreateProductTypeUseCase"
import { DeleteTypeUseCase } from "./DeleteTypeUseCase";

let createTypeUseCase: CreateProductTypeUseCase;
let deleteTypeUseCase: DeleteTypeUseCase;
let typesRepositoryInMemory: TypesRepositoryInMemory;

describe('Delete Type', () => {
    
    beforeEach(()=>{
        typesRepositoryInMemory = new TypesRepositoryInMemory();
        createTypeUseCase = new CreateProductTypeUseCase(
            typesRepositoryInMemory
        );
        deleteTypeUseCase = new DeleteTypeUseCase(
            typesRepositoryInMemory
        );
    })

    it("should be able to delete a new type", async() => {
        const type = {
            description: 'Test'
        };

        await createTypeUseCase.execute({
            description: type.description
        });

        let typeCreated = await typesRepositoryInMemory.findByDescription(
            type.description,
        )

        await deleteTypeUseCase.execute({
            id: typeCreated.id
        })

        typeCreated = await typesRepositoryInMemory.findByDescription(
            type.description,
        )

        expect(typeCreated).toEqual(undefined)
    })

    it('should not be able to delete a type with exists name', async() =>{
        
        await expect(deleteTypeUseCase.execute({
            id: "123123123123"
        })).rejects.toEqual(new AppError("Type no exists!"))
    })
})