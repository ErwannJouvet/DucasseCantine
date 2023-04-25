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
    this.ingredientRepository.save(ingredient);
  }

  async findAll() {
    return await this.ingredientRepository.find();
  }

  async findOne(id: number) {
    return await this.ingredientRepository.findOneBy({ "id": id })
  }

  async update(id: number, ingredient: Ingredient) {
    this.ingredientRepository.update(id, ingredient);
  }

  async remove(id: number) {
    this.ingredientRepository.delete(id);
  }
}
