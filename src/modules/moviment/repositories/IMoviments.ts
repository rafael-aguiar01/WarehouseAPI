import { Moviment } from "../infra/typeorm/entities/Moviment";

interface ICreateMovimentDTO{
   description: string;
   type_moviment: string;
   product_id: string;
   quantity: number;
   address_id: string; 
}

interface IMovimentsRepository{
   findByDescription(description: string): Promise<Moviment>;
   create({ 
      description, 
      type_moviment, 
      product_id, 
      quantity, 
      address_id
   }: ICreateMovimentDTO): Promise<void>
}

export { ICreateMovimentDTO, IMovimentsRepository}