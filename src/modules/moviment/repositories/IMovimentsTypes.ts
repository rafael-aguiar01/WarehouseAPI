import { MovimentType } from "../infra/typeorm/entities/MovimentType";

interface ICreateMovimentTypeDTO{
    description: string;
    type: string;
}

interface IMovimentTypesRepository{
    findByName(description: string): Promise<MovimentType>;
    create({ description, type }: ICreateMovimentTypeDTO): Promise<void>
}

export { ICreateMovimentTypeDTO, IMovimentTypesRepository}