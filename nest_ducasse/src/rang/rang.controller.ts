import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RangService } from './rang.service';
import { RangEntity } from './entities/rang.entity';

@Controller('rang')
export class RangController {
  constructor(private readonly rangService: RangService) {

  }

  @Get()
  getAll() {
    return this.rangService.getRangs();
  }

  @Get(':id')
  get(@Param() params) {
    return this.rangService.getRang(params.id);
  }

  @Post()
  create(@Body() rang : RangEntity) {
    return this.rangService.createRang(rang);
  }

  @Put()
  update(@Body() rang : RangEntity) {
    return this.rangService.updateRang(rang);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.rangService.deleteRang(params.id);
  }
}
