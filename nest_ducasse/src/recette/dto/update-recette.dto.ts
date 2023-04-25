import { PartialType } from '@nestjs/mapped-types';
import { CreateRecetteDto } from './create-recette.dto';

export class UpdateRecetteDto extends PartialType(CreateRecetteDto) {}
