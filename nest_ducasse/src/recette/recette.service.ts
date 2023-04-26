import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Etape } from 'src/etape/entities/etape.entity';
import { EtapeService } from 'src/etape/etape.service';
import { IngredientToRecette } from 'src/ingredient-to-recette/entities/ingredient-to-recette.entity';
import { IngredientToRecetteService } from 'src/ingredient-to-recette/ingredient-to-recette.service';
import { Ingredient } from 'src/ingredient/entities/ingredient.entity';
import { IngredientService } from 'src/ingredient/ingredient.service';
import { Repository } from 'typeorm';
import { Recette } from './entities/recette.entity';

@Injectable()
export class RecetteService {

  constructor(
    @InjectRepository(Recette) private recetteRepository: Repository<Recette>,
    private ingredientService: IngredientService,
    private ingredientToRecetteService: IngredientToRecetteService,
    private etapeService: EtapeService
  ) {}

  async findAll() {
    return await this.recetteRepository.find(
      { relations: ["etapes", "ingredientToRecette", "ingredient"]}
    )
  }

  async findOne(id: number) {
    return await this.recetteRepository.findOneBy({ "id": id });
  }

  update(id: number, recette: Recette) {
    return this.recetteRepository.update(id, recette);
  }

  remove(id: number) {
    return this.recetteRepository.delete(id);
  }

  async create(data: any) {
    const recette: Recette = {
      id: null,
      nom: data.nom,
      description: data.description,
      photo: data.photo,
      temps_preparation: data.temps_preparation,
      temps_cuisson: data.temps_cuisson,
      date_ajout: data.date,
      ingredientToRecette: null,
      etapes: null
    };
    const recetteId = await this.recetteRepository.save(recette);

    const allIngredients = await this.ingredientService.findAll();
    const ingredients: any[] = await this.doIngredients(data, allIngredients);
  
    data.etapes.forEach(async etape => {
      const objEtape: Etape = {
        id: null,
        numero_ordre: etape.numero_ordre,
        instructions: etape.instructions,
        recette: recetteId
      };
      await this.etapeService.create(objEtape);
    });
    
    ingredients.forEach(async ingredient => {
      const objIngredientToRecette: IngredientToRecette = {
        ingredienToRecetteId: null,
        ingredientId: ingredient.id,
        recetteId: recetteId.id,
        dosage: ingredient.dosage,
        ingredient: null,
        recette: null
      };
      this.ingredientToRecetteService.create(objIngredientToRecette);
    });
  }

  async doIngredients(data, allIngredients) {
    const ingredients: any[] = [];
    for(let ingredient of data.ingredients) {
      const ingredientExist = allIngredients.filter(fIngredient => fIngredient.nom === ingredient.nom)
      if(ingredientExist[0]) {
        ingredientExist[0]["dosage"] = ingredient.dosage; 
        ingredients.push( ingredientExist[0] );
      }
      else {
        const newIngredient = await this.ingredientService.create(ingredient);
        console.log(newIngredient);
        ingredients.push(newIngredient);
      }
    }
    return ingredients
  }

}
