import { PartialType } from '@nestjs/mapped-types';
import { CreateEtapeDto } from './create-etape.dto';

export class UpdateEtapeDto extends PartialType(CreateEtapeDto) {}
