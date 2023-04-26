import { Recette } from 'src/recette/entities/recette.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Etape {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero_ordre: number;

  @Column('longtext')
  instructions: string;

  @ManyToOne(() => Recette, recette => recette.etapes)
  recette: Recette;
}
