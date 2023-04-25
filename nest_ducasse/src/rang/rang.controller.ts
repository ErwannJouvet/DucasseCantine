import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RangService } from './rang.service';
import { CreateRangDto } from './dto/create-rang.dto';
import { UpdateRangDto } from './dto/update-rang.dto';

@Controller('rang')
export class RangController {
  constructor(private readonly rangService: RangService) {}

  @Post()
  create(@Body() createRangDto: CreateRangDto) {
    return this.rangService.create(createRangDto);
  }

  @Get()
  findAll() {
    return this.rangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRangDto: UpdateRangDto) {
    return this.rangService.update(+id, updateRangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rangService.remove(+id);
  }
}
