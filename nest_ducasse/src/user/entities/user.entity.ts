import { RangEntity } from "src/rang/entities/rang.entity";
import { RestaurantEntity } from "src/restaurant/entities/restaurant.entity";
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    nom : string;

    @Column({length : 255})
    prenom : string;

    @Column({length : 255})
    email : string;

    @Column('text')
    password : string;

    @ManyToOne(restaurant => RestaurantEntity, restaurant => restaurant.id)
    @JoinColumn({name : 'restaurant'})
    restaurant : RestaurantEntity;

    @ManyToOne(rang => RangEntity, rang => rang.id)
    @JoinColumn({name : 'rang'})
    rang : RangEntity

    @Column({nullable : true})
    refreshToken : string;

    @Column({nullable : true})
    refreshTokenExpires : string;
}
