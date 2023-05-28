import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Etape } from './entities/etape.entity';
import { EtapeService } from './etape.service';

@Controller('etape')
export class EtapeController {
  constructor(private readonly etapeService: EtapeService) {}

  @Post()
  create(@Body() etape: Etape) {
    return this.etapeService.create(etape);
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
  update(@Param('id') id: string, @Body() etape: Etape) {
    return this.etapeService.update(+id, etape);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.etapeService.remove(+id);
  }
}
