import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';
import { container } from 'tsyringe';

class CreateProductController {
    async handle (request: Request, response: Response): Promise<Response>{
        const { description, type_id, unit_id} = request.body
        
        const createProductUseCase = container.resolve(CreateProductUseCase)

        await createProductUseCase.execute({ description, type_id, unit_id})

        return response.status(201).send()
    }
}

export { CreateProductController }