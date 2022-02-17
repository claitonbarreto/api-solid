import { Response, Request } from "express";
import { User } from "../../domain/User";
import { CreateUser } from "./create-user";

export class CreateUserController {
    constructor(private createUser: CreateUser) {
    }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email } = request.body;
        const user = User.create({name, email});

        await this.createUser.execute(user);

        return response.status(201).send();
    }
}