import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IngredientToRecette } from './entities/ingredient-to-recette.entity';

@Injectable()
export class IngredientToRecetteService {

  constructor(
    @InjectRepository(IngredientToRecette) private ingredientToRecetteRepo: Repository<IngredientToRecette>
  ) {}

  create(ingredientToRecette: IngredientToRecette) {
    return this.ingredientToRecetteRepo.save(ingredientToRecette);
  }

  async findAll() {
    return await this.ingredientToRecetteRepo.find();
  }

  async findOne(id: number) {
    return await this.ingredientToRecetteRepo.findOneBy({ "ingredienToRecetteId": id })
  }

  update(id: number, ingredientToRecette: IngredientToRecette) {
    return this.ingredientToRecetteRepo.update(id, ingredientToRecette);
  }

  remove(id: number) {
    return this.ingredientToRecetteRepo.delete(id);
  }
}
