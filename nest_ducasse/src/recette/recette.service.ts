import { Injectable } from '@nestjs/common';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';

@Injectable()
export class RecetteService {
  create(createRecetteDto: CreateRecetteDto) {
    return 'This action adds a new recette';
  }

  findAll() {
    return `This action returns all recette`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recette`;
  }

  update(id: number, updateRecetteDto: UpdateRecetteDto) {
    return `This action updates a #${id} recette`;
  }

  remove(id: number) {
    return `This action removes a #${id} recette`;
  }
}
