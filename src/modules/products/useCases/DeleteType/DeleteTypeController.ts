import { Request, Response } from 'express';
import { DeleteTypeUseCase } from './DeleteTypeUseCase';
import { container } from 'tsyringe';


class DeleteTypeController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;

        const deleteTypeUseCase = container.resolve(DeleteTypeUseCase);

        await deleteTypeUseCase.execute({ id })

        return response.status(201).send()
    }
}

export { DeleteTypeController }