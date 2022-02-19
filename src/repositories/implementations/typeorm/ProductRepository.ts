import { getManager } from "typeorm";
import { IRepository } from "../../../core/IRepository";
import { Product } from "../../../domain/entities/Product";

export class ProductRepository implements IRepository<Product> {
    async create(product: Product): Promise<void> {
        await getManager().getRepository(Product).save(product);
    }

    async list(): Promise<Product[]> {
        return await getManager().getRepository(Product).find();
    }

    async findById(id: string): Promise<Product> {
        return await getManager().getRepository(Product).findOne(id);
    }

    async findByCodeBar(code_bar: string): Promise<Product> {
        return await getManager().getRepository(Product).findOne({ code_bar });
    }
}