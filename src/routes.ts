import { Router } from "express";
import { createProductController } from "./use-cases/create-product";
import { createUserController } from "./use-cases/create-user";
import { getProductsController } from "./use-cases/get-products";
import { getUsersController } from "./use-cases/get-users";

const router = Router()

router.post('/users', (req,res) => createUserController.handle(req,res))
router.get('/users', (req,res) => getUsersController.handle(req,res))
router.post('/product', (req,res) => createProductController.handle(req,res))
router.get('/product', (req,res) => getProductsController.handle(req,res))

export {router}