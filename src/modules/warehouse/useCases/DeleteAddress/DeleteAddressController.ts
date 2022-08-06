import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteAddressUseCase } from './DeleteAddressUseCase';

class DeleteAddressController{
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const deleteUnitUseCase = container.resolve(DeleteAddressUseCase);

        await deleteUnitUseCase.execute({ id });

        return response.status(201).send();
    }
}

export { DeleteAddressController }