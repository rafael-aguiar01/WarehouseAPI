import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { AppError } from "@shared/erros/AppError";
import { CreateProductUseCase } from "../CreateProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "./DeleteProductUseCase"


let deleteProductUseCase: DeleteProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;
let createProductUseCase: CreateProductUseCase;

describe('Delete Product', () => {
   beforeEach(()=> {
        productsRepositoryInMemory = new ProductsRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(
            productsRepositoryInMemory
        );
        deleteProductUseCase = new DeleteProductUseCase (
            productsRepositoryInMemory
        );
   })
   
   it("should be able to delete a product", async() => {
        const product = {
            description: "Descrição",
            type_id: "12311222",
            unit_id: "12312313"
        }

        await createProductUseCase.execute({
            description: product.description,
            type_id: product.type_id,
            unit_id: product.unit_id
        })

        let productCreated = await productsRepositoryInMemory.findByDescription(
            product.description,
        )

        await deleteProductUseCase.execute({
            id: productCreated.id
        })

        productCreated = await productsRepositoryInMemory.findByDescription(
            product.description
        )

        expect(productCreated).toEqual(undefined)
   })

   it('should not be able to delete a product that no exists', async() => {

        await expect(deleteProductUseCase.execute({
            id: "12312321321"
        })).rejects.toEqual(new AppError("Product no exists!"))
    })
})