import { Module } from '@nestjs/common';
import { RangService } from './rang.service';
import { RangController } from './rang.controller';

@Module({
  controllers: [RangController],
  providers: [RangService]
})
export class RangModule {}
