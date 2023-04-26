import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IngredientToRecette } from './entities/ingredient-to-recette.entity';
import { IngredientToRecetteService } from './ingredient-to-recette.service';

@Controller('ingredient-to-recette')
export class IngredientToRecetteController {
  constructor(private readonly ingredientToRecetteService: IngredientToRecetteService) {}

  @Post()
  create(@Body() ingredientToRecette: IngredientToRecette) {
    return this.ingredientToRecetteService.create(ingredientToRecette);
  }

  @Get()
  findAll() {
    return this.ingredientToRecetteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientToRecetteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ingredientToRecette: IngredientToRecette) {
    return this.ingredientToRecetteService.update(+id, ingredientToRecette);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientToRecetteService.remove(+id);
  }
}
