import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarroService } from './cars.service';
import { CarroDto } from './dto/create-car.dto';
import { AtualizaCarroDto } from './dto/update-car.dto';


@Controller('cars')
export class CarroController {
  constructor(private readonly carsService: CarroService) {}

  @Post()
  create(@Body() createCarDto: CarroDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: AtualizaCarroDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
