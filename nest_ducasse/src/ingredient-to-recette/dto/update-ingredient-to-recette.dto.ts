import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientToRecetteDto } from './create-ingredient-to-recette.dto';

export class UpdateIngredientToRecetteDto extends PartialType(CreateIngredientToRecetteDto) {}
