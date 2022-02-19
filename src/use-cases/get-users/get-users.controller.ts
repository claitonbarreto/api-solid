import { Response, Request } from "express";
import { Entity } from "typeorm";
import { User } from "../../domain/entities/User";
import { GetUsers } from "./get-users";

export class GetUsersController {
    constructor(
        private getUsers: GetUsers
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const users = await this.getUsers.execute()

        return response.status(200).json(users);
    }
}