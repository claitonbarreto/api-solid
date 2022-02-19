import { Request, Response } from "express";
import { Product } from "../../domain/entities/Product";
import { CreateProductUsecase } from "./create-product-use-case";

export class CreateProductController {
    constructor(
        private createProduct: CreateProductUsecase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {

        try{

            const { code_bar, name, price, description } = request.body;
            
            const product = Product.create({ code_bar, name, price, description });
    
            await this.createProduct.execute(product);
    
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}