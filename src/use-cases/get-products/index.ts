import { ProductRepository } from "../../repositories/implementations/in_memory/ProductRepository";
import { GetProductsController } from "./get-products-controller";
import { GetProductsUsecase } from "./get-products-use-case";

const productRepository = new ProductRepository();
const getProductsUsecase = new GetProductsUsecase(productRepository);
const getProductsController = new GetProductsController(getProductsUsecase);

export {
    getProductsController,
    getProductsUsecase
}