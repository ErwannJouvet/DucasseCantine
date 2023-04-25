import { Module } from '@nestjs/common';
import { IngredientToRecetteService } from './ingredient-to-recette.service';
import { IngredientToRecetteController } from './ingredient-to-recette.controller';

@Module({
  controllers: [IngredientToRecetteController],
  providers: [IngredientToRecetteService]
})
export class IngredientToRecetteModule {}
