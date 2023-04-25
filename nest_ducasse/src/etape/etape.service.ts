import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Etape } from './entities/etape.entity';

@Injectable()
export class EtapeService {

  constructor(
    @InjectRepository(Etape) private etapeRepository: Repository<Etape>
  ) {}

  create(etape: Etape) {
    return this.etapeRepository.save(etape)
  }

  async findAll() {
    return await this.etapeRepository.find();
  }

  async findOne(id: number) {
    return await this.etapeRepository.findOneBy({ "id": id });
  }

  update(id: number, etape: Etape) {
    return this.etapeRepository.update(id, etape);
  }

  remove(id: number) {
    return this.etapeRepository.delete(id);
  }
}
