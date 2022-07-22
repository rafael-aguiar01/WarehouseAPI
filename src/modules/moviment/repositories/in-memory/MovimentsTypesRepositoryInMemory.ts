import { MovimentType } from "@modules/moviment/infra/typeorm/entities/MovimentType";
import { ICreateMovimentTypeDTO, IMovimentTypesRepository } from "../IMovimentsTypes";

class MovimentTypeRespositoryInMemory implements IMovimentTypesRepository {
    
    movimentTypes: MovimentType[] = [];

    async create({ description, type }: ICreateMovimentTypeDTO): Promise<void> {
        const movimentType = new MovimentType();

        Object.assign(movimentType, {
            description,
            type
        });

        this.movimentTypes.push(movimentType);
    }

    async findByName(description: string): Promise<MovimentType> {
        const movimentType = this.movimentTypes.find((movimentType) => movimentType.description === description);
        return movimentType;
    }
}

export { MovimentTypeRespositoryInMemory }