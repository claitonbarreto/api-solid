export interface IRepository<T> {
    create(item: T): Promise<void>;
    findById(id: string): Promise<T>;
    list(): Promise<T[]>;
}