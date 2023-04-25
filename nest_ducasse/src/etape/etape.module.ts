import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etape } from './entities/etape.entity';
import { EtapeController } from './etape.controller';
import { EtapeService } from './etape.service';

@Module({
  imports: [TypeOrmModule.forFeature([Etape])],
  controllers: [EtapeController],
  providers: [EtapeService],
  exports: [EtapeService]
})
export class EtapeModule {}
