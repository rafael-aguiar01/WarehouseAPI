import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Type } from './Type';
import { Unity } from './Unity';

@Entity("products")
class Product {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;
    
    @ManyToMany(() => Type)
    @JoinColumn({name: "type_id"})
    type: Type;

    @ManyToMany(() => Unity)
    @JoinColumn({name: "unit_id"})
    unit: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Product }