import { User } from "../../domain/User";
import { IMailerProvider } from "../../providers/IMailerProvider";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUser {

    constructor(
        private userRepository: IUserRepository,
        private mailProvider: IMailerProvider
    ) { }
   
    async execute(user: User) {
        const userExists = await this.userRepository.findByEmail(user.email);
        if (userExists) {
            throw new Error('User already exists');
        }

        await this.userRepository.create(user);

        const { name, email } = user.props;

        await this.mailProvider.sendWelcomeEmail({name, email});
    }
}