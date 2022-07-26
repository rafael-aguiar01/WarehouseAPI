import { Request, Response} from 'express'
import { CreateUnityUseCase } from '@modules/products/useCases/CreateUnity/CreateUnityUseCase'
import { container } from 'tsyringe';

class CreateUnityController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { description } = request.body;

        const createUnityCase = container.resolve(CreateUnityUseCase)

        await createUnityCase.execute({ description })

        return response.status(201).send()
    }
}

export { CreateUnityController }