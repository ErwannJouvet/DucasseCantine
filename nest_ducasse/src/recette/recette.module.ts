import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteController } from './recette.controller';

@Module({
  controllers: [RecetteController],
  providers: [RecetteService]
})
export class RecetteModule {}
