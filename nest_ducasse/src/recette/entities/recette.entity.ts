import { Etape } from "src/etape/entities/etape.entity";
import { IngredientToRecette } from "src/ingredient-to-recette/entities/ingredient-to-recette.entity";
import { Ingredient } from "src/ingredient/entities/ingredient.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column('longtext')
  description: string;

  @Column('longtext')
  photo: string;

  @Column()
  temps_preparation: number;

  @Column()
  temps_cuisson: number;

  @Column('date')
  date_ajout: any;

  @OneToMany(() => IngredientToRecette, ingredientToRecette => ingredientToRecette.recette)
  public ingredientToRecette: IngredientToRecette[];

  @OneToMany(() => Etape, etape => etape.recette)
  etapes: Etape[];
}
