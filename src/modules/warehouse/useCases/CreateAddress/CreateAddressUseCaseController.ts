import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateAddressUseCase } from './CreateAddressUseCase'

class CreateAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { storehouse_id, code, capacity } = request.body

        const createAddressUseCase = container.resolve(CreateAddressUseCase)

        await createAddressUseCase.execute({ storehouse_id, code, capacity})

        return response.status(201).send()
    }
}

export { CreateAddressController }