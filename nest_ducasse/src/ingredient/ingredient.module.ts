import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ingredient])],
  providers: [IngredientService],
  controllers: [IngredientController],
  exports: [IngredientService]
})
export class IngredientModule {}
