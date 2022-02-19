import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetUsers {
    constructor(
        private userRepository: IUserRepository,
    ) {}

    async execute(): Promise<User[]> {
        const users =  await this.userRepository.list();

        return users.map(user => User.create({
            name: user.name,
            email: user.email,
        }, user.id));
    }
}