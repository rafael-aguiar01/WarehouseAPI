import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity("balances")
class Balance {
    @PrimaryColumn()
    id?: string;

    @ManyToMany(() => Product)
    @JoinColumn({name: "product_id"})
    product: Product
    
    @Column()
    product_id: string;

    @Column()
    balance: number;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Balance }