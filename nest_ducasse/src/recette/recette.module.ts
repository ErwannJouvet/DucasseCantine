import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtapeModule } from 'src/etape/etape.module';
import { IngredientToRecetteModule } from 'src/ingredient-to-recette/ingredient-to-recette.module';
import { IngredientModule } from 'src/ingredient/ingredient.module';
import { Recette } from './entities/recette.entity';
import { RecetteController } from './recette.controller';
import { RecetteService } from './recette.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recette]), IngredientModule, EtapeModule, IngredientToRecetteModule],
  controllers: [RecetteController],
  providers: [RecetteService],
  exports: [RecetteService]
})
export class RecetteModule {}
