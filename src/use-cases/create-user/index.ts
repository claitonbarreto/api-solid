import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UserRepository } from "../../repositories/implementations/typeorm/UserRepository";
import { CreateUser } from "./create-user";
import { CreateUserController } from "./create-user.controller";

const userRepository = new UserRepository()
const mailProvider = new MailtrapMailProvider()

const createUser = new CreateUser(
    userRepository,
    mailProvider
)

const createUserController = new CreateUserController(createUser)

export { createUserController, createUser }