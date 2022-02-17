import * as crypto from 'crypto'; 
import { Column } from 'typeorm';

export abstract class Entity<T> {

    protected _id: string;
    public props: T 

    constructor(props: T, id?: string) {
        if(!id)
            this._id = crypto.randomBytes(16).toString('hex');

        this.props = props;
    }

    get id(): string {
        return this._id;
    }  
}