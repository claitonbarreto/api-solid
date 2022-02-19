import { IRepository } from "../../../core/IRepository";
import { Product } from "../../../domain/entities/Product";

export class ProductRepository implements IRepository<Product> {
    
        private products: Product[] = [];
    
        create(product: Product): Promise<void> {
            this.products.push(product);
            return Promise.resolve();
        }
    
        findByCodeBar(code_bar: string): Promise<Product> {
            const product = this.products.find(product => product.code_bar === code_bar)
    
            if (!product) {
                return Promise.resolve(null);
            }
    
            return Promise.resolve(product);
        }
    
        findById(id: string): Promise<Product> {
            return this.products.find(product => product.id === id)
                ? Promise.resolve(this.products.find(product => product.id === id))
                : Promise.reject(new Error('Product not found'));
        }
    
        list(): Promise<Product[]> {
            return Promise.resolve(this.products);
        }
}