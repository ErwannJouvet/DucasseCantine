import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    // @ManyToOne(user => UserEntity, restaurant => restaurant.id)
    // @JoinColumn({ name : 'user'})
    // user : UserEntity;
}
