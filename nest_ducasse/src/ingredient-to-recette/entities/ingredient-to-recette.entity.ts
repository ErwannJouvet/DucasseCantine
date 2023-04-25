import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { Recette } from 'src/recette/entities/recette.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IngredientToRecette {
  @PrimaryGeneratedColumn()
  public ingredienToRecetteId: number;

  @Column()
  public ingredientId: number;

  @Column()
  public recetteId: number;

  @Column({ length: 255 })
  public dosage: string;

  @ManyToOne(() => Ingredient, ingredient => ingredient.ingredientToRecette)
  public ingredient: Ingredient;

  @ManyToOne(() => Recette, recette => recette.ingredientToRecette)
  public recette: Recette;
}
