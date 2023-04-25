import { Injectable } from '@nestjs/common';
import { CreateIngredientToRecetteDto } from './dto/create-ingredient-to-recette.dto';
import { UpdateIngredientToRecetteDto } from './dto/update-ingredient-to-recette.dto';

@Injectable()
export class IngredientToRecetteService {
  create(createIngredientToRecetteDto: CreateIngredientToRecetteDto) {
    return 'This action adds a new ingredientToRecette';
  }

  findAll() {
    return `This action returns all ingredientToRecette`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientToRecette`;
  }

  update(id: number, updateIngredientToRecetteDto: UpdateIngredientToRecetteDto) {
    return `This action updates a #${id} ingredientToRecette`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientToRecette`;
  }
}
