import { Request, Response } from "express";
import { GetProductsUsecase } from "./get-products-use-case";

export class GetProductsController {
    constructor(private getProductsUsecase: GetProductsUsecase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const products = await this.getProductsUsecase.execute();
        return response.status(200).send(products);
    }
}