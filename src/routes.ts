import { Router } from "express";
import { createUserController } from "./use-cases/create-user";
import { getUsersController } from "./use-cases/get-users";

const router = Router()

router.post('/users', (req,res) => createUserController.handle(req,res))

router.get('/users', (req,res) => getUsersController.handle(req,res))

export {router}