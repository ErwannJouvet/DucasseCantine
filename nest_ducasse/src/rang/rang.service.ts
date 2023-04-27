import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RangEntity } from './entities/rang.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RangService {
  constructor(@InjectRepository(RangEntity) private rangRepository : Repository<RangEntity>) {

  }

  async getRangs() : Promise<RangEntity[]> {
    return await this.rangRepository.find();
  }

  async getRang(id : number) : Promise<RangEntity[]> {
    return await this.rangRepository.find({
      where : [{"id" : id}]
    });

  }

  async createRang(rang : RangEntity) {
    return await this.rangRepository.save(rang);
  }

  async updateRang(rang : RangEntity) {
    return await this.rangRepository.save(rang);
  }

  async deleteRang(rang : RangEntity) {
    return await this.rangRepository.delete(rang);
  }
}
