import { Request, Response } from 'express';
import { CreateProductTypeUseCase } from './CreateProductTypeUseCase';
import { container } from 'tsyringe';

class CreateProductTypeController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { description } = request.body

        const createProductTypeUseCase = container.resolve(CreateProductTypeUseCase)

        await createProductTypeUseCase.execute({ description })

        return response.status(201).send()
    }
}

export { CreateProductTypeController }