import { Moviment } from "../infra/typeorm/entities/Moviment";

interface ICreateMovimentDTO{
   entrance: boolean;
   product_id: string;
   quantity: number;
   address_id: string; 
}

interface IMovimentsRepository{
   findById(id: string): Promise<Moviment>;
   create({ 
      entrance, 
      product_id, 
      quantity, 
      address_id
   }: ICreateMovimentDTO): Promise<void>
}

export { ICreateMovimentDTO, IMovimentsRepository}