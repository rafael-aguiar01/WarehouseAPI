import { v4 as uuiv4 } from 'uuid';

class MovimentType {
    id?: string;

    description: string;

    type: string;

    constructor(){
        if(!this.id){
            this.id = uuiv4();
        }
    }
}

export { MovimentType }