import { Module } from '@nestjs/common';
import { RangService } from './rang.service';
import { RangController } from './rang.controller';
import { RangEntity } from './entities/rang.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [TypeOrmModule.forFeature([RangEntity])],
  controllers : [RangController],
  providers : [RangService],
  exports : [RangService]
})
export class RangModule {}
