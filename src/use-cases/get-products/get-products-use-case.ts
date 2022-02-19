import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../repositories/implementations/in_memory/ProductRepository";

export class GetProductsUsecase {
    constructor(private productRepository: ProductRepository) { }
    async execute(): Promise<Product[]> {
        const products = await this.productRepository.list();
        return products;
    }
}