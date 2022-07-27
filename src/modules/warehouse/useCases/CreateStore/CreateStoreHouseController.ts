import { Request, Response } from 'express';
import { CreateStoreHouseUseCase } from './CreateStoreHouseUseCase';
import { container } from 'tsyringe';

class CreateStoreHouseController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { name } = request.body;

        const createStoreHouseUseCase = container.resolve(CreateStoreHouseUseCase);

        await createStoreHouseUseCase.execute({ name });

        return response.status(201).send();
    }
}

export { CreateStoreHouseController }