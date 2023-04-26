import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientService {

  constructor(
    @InjectRepository(Ingredient) private ingredientRepository: Repository<Ingredient>
  ) {} 

  async create(ingredient: Ingredient) {
    const newIngredient = await this.ingredientRepository.save(ingredient);
    return newIngredient;
  }

  async findAll() {
    return await this.ingredientRepository.find();
  }

  async findOne(id: number) {
    return await this.ingredientRepository.findOneBy({ "id": id })
  }

  async findOneByName(name: string) {
    const ingredient = await this.ingredientRepository.findOneBy({ nom: name });
    return ingredient;
  }

  async update(id: number, ingredient: Ingredient) {
    this.ingredientRepository.update(id, ingredient);
  }

  async remove(id: number) {
    this.ingredientRepository.delete(id);
  }
}
