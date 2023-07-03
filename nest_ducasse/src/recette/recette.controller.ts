import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Recette } from './entities/recette.entity';
import { RecetteService } from './recette.service';

@Controller('recette')
export class RecetteController {
  constructor(private readonly recetteService: RecetteService) {}

  @Post()
  create(@Body() data: any) {
    return this.recetteService.create(data);
  }

  @Get()
  findAll() {
    return this.recetteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recetteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() recette: Recette) {
    return this.recetteService.update(+id, recette);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetteService.remove(+id);
  }
}
