import { PartialType } from '@nestjs/mapped-types';
import { CreateRangDto } from './create-rang.dto';

export class UpdateRangDto extends PartialType(CreateRangDto) {}
