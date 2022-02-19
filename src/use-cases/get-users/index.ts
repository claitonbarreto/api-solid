import { UserRepository } from "../../repositories/implementations/typeorm/UserRepository";
import { GetUsers } from "./get-users";
import { GetUsersController } from "./get-users.controller";

const userRepository = new UserRepository();
const getUsers = new GetUsers(userRepository);
const getUsersController = new GetUsersController(getUsers);

export { getUsersController, getUsers };