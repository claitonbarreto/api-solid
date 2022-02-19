import { Entity } from "../../core/Entity";
import { Column, Entity as OrmEntity } from 'typeorm'


type ProductProps = {
    code_bar: string;
    name: string;
    price: number;
    description: string;
}

@OrmEntity('products')
export class Product extends Entity<ProductProps> {

    @Column()
    code_bar: string;

    @Column()
    name: string;

    @Column({
        type: 'decimal',
        precision: 5,
        scale: 2,
        default: 0
    })
    price: number;

    @Column()
    description: string;

    private constructor(
        code_bar:string,
        name:string,
        price:number,
        description:string
    ) {
        super({ code_bar, name, price, description });
    }

    static create(props: ProductProps): Product {
        const { code_bar, name, price, description } = props;
        return new Product(code_bar, name, price, description);
    }
}