import { Unity } from "@modules/products/infra/typeorm/entities/Unity";
import { IUnitsRepository, ICreatUnityDTO, IDeleteUnityDTO } from "../IUnitsRepository";

class UnitsRepositoryInMemory implements IUnitsRepository {

    units: Unity[] = [];

    async create({ description }: ICreatUnityDTO): Promise<void> {
        const unit = new Unity();

        Object.assign(unit, {
            description
        });

        this.units.push(unit);
    }

    async findByID(id: string): Promise<Unity> {
        const unit = this.units.find((unit) => unit.id === id);
        return unit;
    }

    async findByDescription(description: string): Promise<Unity> {
        const unit = this.units.find((unit) => unit.description === description);
        return unit;
    }

    async deleteById({ id }: IDeleteUnityDTO): Promise<void> {
        this.units = this.units.filter((unit) => unit.id !== id)
    }

}

export { UnitsRepositoryInMemory }