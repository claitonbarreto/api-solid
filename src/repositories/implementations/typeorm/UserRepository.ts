import { Connection, createConnection, createQueryBuilder, getConnection, getManager } from "typeorm";
import { IRepository } from "../../../core/IRepository";
import { User } from "../../../domain/entities/User";
import { ProductRepository } from "../in_memory/ProductRepository";

export class UserRepository implements IRepository<User> {
    
        
        async create(user: User): Promise<void> {

            const query = getConnection().createQueryBuilder()
                .insert()
                .into('users')
                .values(user)

            await query.execute()
        }
    
        async findByEmail(email: string): Promise<User> {
            const user = await getManager().getRepository(User)
                .findOne({ email })

            return user
        }
    
        findById(id: string): Promise<User> {
            const query = getConnection().createQueryBuilder()
                .select('*')
                .from(User, 'user')
                .where('user._id = :id', { id });

            return query.getOne();
        }
    
        async list(): Promise<User[]> {
            const query = getManager().getRepository(User)
            const users = await query.find()
            return users
        }
}