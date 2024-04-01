import { Module } from '@nestjs/common';
import { CarroService } from './cars.service';
import { CarroController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schema/car.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
  controllers: [CarroController],
  providers: [CarroService],
})
export class CarsModule {}
