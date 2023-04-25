import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { CreateRecetteDto } from './dto/create-recette.dto';
import { UpdateRecetteDto } from './dto/update-recette.dto';

@Controller('recette')
export class RecetteController {
  constructor(private readonly recetteService: RecetteService) {}

  @Post()
  create(@Body() createRecetteDto: CreateRecetteDto) {
    return this.recetteService.create(createRecetteDto);
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
  update(@Param('id') id: string, @Body() updateRecetteDto: UpdateRecetteDto) {
    return this.recetteService.update(+id, updateRecetteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recetteService.remove(+id);
  }
}
