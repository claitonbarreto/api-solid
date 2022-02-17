import { User } from "../domain/User";

export interface IUserRepository {
    create(user: User): Promise<void>;
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    list(): Promise<User[]>;
}