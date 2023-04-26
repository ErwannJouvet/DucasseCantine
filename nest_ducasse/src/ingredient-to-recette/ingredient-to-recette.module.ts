import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientToRecette } from './entities/ingredient-to-recette.entity';
import { IngredientToRecetteController } from './ingredient-to-recette.controller';
import { IngredientToRecetteService } from './ingredient-to-recette.service';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientToRecette])],
  controllers: [IngredientToRecetteController],
  providers: [IngredientToRecetteService],
  exports: [IngredientToRecetteService]
})
export class IngredientToRecetteModule {}
