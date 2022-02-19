import { IRepository } from "../../../core/IRepository";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../IUserRepository";

export class UserRepository implements IRepository<User>{

    private users: User[] = [];

    create(user: User): Promise<void> {
        this.users.push(user);
        return Promise.resolve();
    }

    findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)

        if(!user){
            return Promise.resolve(null);
        }

        return Promise.resolve(user);
    }

    findById(id: string): Promise<User> {
        return this.users.find(user => user.id === id)
            ? Promise.resolve(this.users.find(user => user.id === id))
            : Promise.reject(new Error('User not found'));
    }

    list(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
}