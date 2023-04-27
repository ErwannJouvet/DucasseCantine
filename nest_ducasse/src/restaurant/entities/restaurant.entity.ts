import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RestaurantEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    nom : string;

    @Column({width : 3})
    num_voie : number;

    @Column({length : 255})
    adresse : string;

    @Column({width : 5})
    code_postale : number;

    @Column({length : 255})
    photo : string;

    @OneToMany(() => UserEntity, (user) => user.restaurant)
    users : UserEntity[];

    // @ManyToOne(user => UserEntity, restaurant => restaurant.id)
    // @JoinColumn({ name : 'user'})
    // user : UserEntity;
}
