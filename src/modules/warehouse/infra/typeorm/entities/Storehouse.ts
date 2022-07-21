import { v4 as uuiv4 } from 'uuid';

class Storehouse {
    id?: string;

    name: string;

    constructor(){
        if(!this.id){
            this.id = uuiv4();
        }
    }
}

export { Storehouse }