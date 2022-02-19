import { Entity as OrmEntity, Column, PrimaryColumn } from "typeorm";

import { Entity } from "../../core/Entity";

type UserProps = {
    name: string;
    email: string;
}

@OrmEntity('users')
export class User  extends Entity<UserProps> {

    @Column()
    name: string;

    @Column()
    email: string;

    private constructor(name: string, email: string, id?: string) {
        super({name, email}, id);
    }

    static create({name, email}:UserProps, id?:string): User {
        return new User(name, email, id);
    }
}