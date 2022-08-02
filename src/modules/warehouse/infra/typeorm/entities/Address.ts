import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuiv4 } from 'uuid';
import { Storehouse } from './Storehouse';

@Entity("address")
class Address {
    @PrimaryColumn()
    id?: string;

    @ManyToMany(() => Storehouse)
    @JoinColumn({name: "storehouse_id"})
    storehouse: Storehouse;

    @Column()
    storehouse_id: string;

    @Column()
    code: string;

    @Column()
    capacity: number;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuiv4();
        }
    }
}

export { Address }