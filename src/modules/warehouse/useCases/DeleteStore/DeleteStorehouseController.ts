import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteStorehouseUseCase } from './DeleteStorehouseUseCase';

class DeleteStorehouseController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const deleteStorehouseUseCase = container.resolve(DeleteStorehouseUseCase);

        await deleteStorehouseUseCase.execute({ id });

        return response.status(201).send();
    }
}

export { DeleteStorehouseController }