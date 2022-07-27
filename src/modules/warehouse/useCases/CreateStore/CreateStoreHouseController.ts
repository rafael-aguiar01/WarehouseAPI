import { Request, Response } from 'express';
import { CreateStorehouseUseCase } from './CreateStorehouseUseCase';
import { container } from 'tsyringe';

class CreateStorehouseController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { name } = request.body;

        const createStorehouseUseCase = container.resolve(CreateStorehouseUseCase);

        await createStorehouseUseCase.execute({ name });

        return response.status(201).send();
    }
}

export { CreateStorehouseController }