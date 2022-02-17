import { Entity as OrmEntity, Column } from "typeorm";
import { Entity } from "../core/Entity";

type UserProps = {
    name: string;
    email: string;
}

export class User extends Entity<UserProps> {

    name: string;

    email: string;

    private constructor(name: string, email: string) {
        super({name, email});
    }

    static create({name, email}:UserProps): User {
        return new User(name, email);
    }
}