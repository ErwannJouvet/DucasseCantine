import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientToRecetteService } from './ingredient-to-recette.service';
import { CreateIngredientToRecetteDto } from './dto/create-ingredient-to-recette.dto';
import { UpdateIngredientToRecetteDto } from './dto/update-ingredient-to-recette.dto';

@Controller('ingredient-to-recette')
export class IngredientToRecetteController {
  constructor(private readonly ingredientToRecetteService: IngredientToRecetteService) {}

  @Post()
  create(@Body() createIngredientToRecetteDto: CreateIngredientToRecetteDto) {
    return this.ingredientToRecetteService.create(createIngredientToRecetteDto);
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
  update(@Param('id') id: string, @Body() updateIngredientToRecetteDto: UpdateIngredientToRecetteDto) {
    return this.ingredientToRecetteService.update(+id, updateIngredientToRecetteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientToRecetteService.remove(+id);
  }
}
