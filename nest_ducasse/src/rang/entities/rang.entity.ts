import { UserEntity } from "src/user/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RangEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    fonction : string;

    @OneToMany(() => UserEntity, (user) => user.rang)
    users : UserEntity[];

    // @ManyToOne(user => UserEntity, rang => rang.id)
    // @JoinColumn({name : 'user'})
    // user : UserEntity;
}
