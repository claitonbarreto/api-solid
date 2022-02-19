import { ProductRepository } from "../../repositories/implementations/typeorm/ProductRepository";
import { CreateProductController } from "./create-product-controller";
import { CreateProductUsecase } from "./create-product-use-case";

const productRepository = new ProductRepository();

const createProductUsecase = new CreateProductUsecase(productRepository);

const createProductController = new CreateProductController(createProductUsecase);

export {createProductController, createProductUsecase}