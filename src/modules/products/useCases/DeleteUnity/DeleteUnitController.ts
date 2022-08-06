import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteUnityUseCase } from './DeleteUnityUseCase';

class DeleteUnitController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const deleteUnitUseCase = container.resolve(DeleteUnityUseCase);

        await deleteUnitUseCase.execute({ id })

        return response.status(201).send()
    }
}

export { DeleteUnitController }