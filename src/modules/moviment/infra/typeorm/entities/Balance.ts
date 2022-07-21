import { v4 as uuidv4 } from 'uuid';

class Balance {
    id?: string;

    product_id: string;

    product_name: string;

    storehouse_description: string;

    balance: number;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export { Balance }