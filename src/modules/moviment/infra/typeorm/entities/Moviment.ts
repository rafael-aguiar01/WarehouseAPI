import { Product } from '@modules/products/infra/typeorm/entities/Product';
import { Address } from '@modules/warehouse/infra/typeorm/entities/Address';
import { Column, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuiv4 } from 'uuid';

@Entity("moviments")
class Moviment {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @Column()
    type_moviment: boolean;

    @ManyToMany(() => Product)
    @JoinColumn({name:"product_id"})
    product: Product;

    @Column()
    product_id: string;

    @Column()
    quantity: number;

    @ManyToMany(() => Address)
    @JoinColumn({ name: "address_id"})
    address: Address;

    @Column()
    address_id: string;

    constructor(){
        if(!this.id){
            this.id = uuiv4();
        }
    }
}

export { Moviment }