import { PrimaryColumn } from "typeorm";
import crypto from "crypto";

export class Entity<T> {
    @PrimaryColumn()
    _id: string;

    constructor(props: T, id?: string) {
        this._id = id || crypto.randomBytes(16).toString('hex');
        Object.assign(this, props);
    }

    get id(): string {
        return this._id;
    }
}