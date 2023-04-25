import { Injectable } from '@nestjs/common';
import { CreateRangDto } from './dto/create-rang.dto';
import { UpdateRangDto } from './dto/update-rang.dto';

@Injectable()
export class RangService {
  create(createRangDto: CreateRangDto) {
    return 'This action adds a new rang';
  }

  findAll() {
    return `This action returns all rang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rang`;
  }

  update(id: number, updateRangDto: UpdateRangDto) {
    return `This action updates a #${id} rang`;
  }

  remove(id: number) {
    return `This action removes a #${id} rang`;
  }
}
