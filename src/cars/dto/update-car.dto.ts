import { PartialType } from '@nestjs/mapped-types';
import { CarroDto } from './create-car.dto';

export class AtualizaCarroDto extends PartialType(CarroDto) {}
