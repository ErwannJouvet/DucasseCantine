import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EtapeService } from './etape.service';
import { CreateEtapeDto } from './dto/create-etape.dto';
import { UpdateEtapeDto } from './dto/update-etape.dto';

@Controller('etape')
export class EtapeController {
  constructor(private readonly etapeService: EtapeService) {}

  @Post()
  create(@Body() createEtapeDto: CreateEtapeDto) {
    return this.etapeService.create(createEtapeDto);
  }

  @Get()
  findAll() {
    return this.etapeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.etapeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEtapeDto: UpdateEtapeDto) {
    return this.etapeService.update(+id, updateEtapeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etapeService.remove(+id);
  }
}
