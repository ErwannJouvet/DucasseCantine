import { Injectable } from '@nestjs/common';
import { CreateEtapeDto } from './dto/create-etape.dto';
import { UpdateEtapeDto } from './dto/update-etape.dto';

@Injectable()
export class EtapeService {
  create(createEtapeDto: CreateEtapeDto) {
    return 'This action adds a new etape';
  }

  findAll() {
    return `This action returns all etape`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etape`;
  }

  update(id: number, updateEtapeDto: UpdateEtapeDto) {
    return `This action updates a #${id} etape`;
  }

  remove(id: number) {
    return `This action removes a #${id} etape`;
  }
}
