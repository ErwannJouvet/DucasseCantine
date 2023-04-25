import { IngredientToRecette } from 'src/ingredient-to-recette/entities/ingredient-to-recette.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column({ length: 255 })
  photo: string;

  @Column()
  allergene: boolean;

  @OneToMany(() => IngredientToRecette, ingredientToRecette => ingredientToRecette.ingredient)
  public ingredientToRecette: IngredientToRecette[];
}
