import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Ingredient } from './entities/ingredient.entity';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  @Post()
  create(@Body() ingredient: Ingredient) {
    return this.ingredientService.create(ingredient);
  }

  @Get()
  findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ingredient: Ingredient) {
    return this.ingredientService.update(+id, ingredient);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientService.remove(+id);
  }
}
