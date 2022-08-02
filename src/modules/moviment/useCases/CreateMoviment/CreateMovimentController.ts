import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMovimentUseCase } from './CreateMovimentUseCase';

class CreateMovimentController {
    async handle (request: Request, response: Response): Promise<Response>{
        const { 
            entrance, 
            product_id, 
            quantity, 
            address_id 
        } = request.body

        const createMovimentUseCase = container.resolve(CreateMovimentUseCase)

        await createMovimentUseCase.execute({
            entrance, 
            product_id, 
            quantity, 
            address_id 
        })

        return response.status(201).send()
    }
}

export { CreateMovimentController }