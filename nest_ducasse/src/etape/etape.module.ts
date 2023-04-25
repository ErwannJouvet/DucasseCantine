import { Module } from '@nestjs/common';
import { EtapeService } from './etape.service';
import { EtapeController } from './etape.controller';

@Module({
  controllers: [EtapeController],
  providers: [EtapeService]
})
export class EtapeModule {}
