import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RangEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 255})
    fonction : string;

    // @ManyToOne(user => UserEntity, rang => rang.id)
    // @JoinColumn({name : 'user'})
    // user : UserEntity;
}
