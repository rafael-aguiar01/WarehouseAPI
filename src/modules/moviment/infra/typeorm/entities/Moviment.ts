import { v4 as uuiv4 } from 'uuid';

class Moviment {
    id?: string;

    description: string;

    // type_moviment: string;

    // product_id: string;

    // quantity: number;

    // address_id: string;

    constructor(){
        if(!this.id){
            this.id = uuiv4();
        }
    }
}

export { Moviment }