import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../repositories/implementations/in_memory/ProductRepository";

export class CreateProductUsecase {
    constructor(private productRepository: ProductRepository) {
    }
    async execute(product: Product): Promise<void> {
        const productExists = await this.productRepository.findByCodeBar(product.code_bar);
        
        if (productExists) {
            throw new Error('Product already exists');
        }
        
        this.productRepository.create(product);
    }
}