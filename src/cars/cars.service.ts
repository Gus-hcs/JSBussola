import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schema/car.schema';
import { Model } from 'mongoose';
import { CarroDto } from './dto/create-car.dto';
import { AtualizaCarroDto } from './dto/update-car.dto';

@Injectable()
export class CarroService {

  constructor(@InjectModel(Car.name) private carro: Model<Car>) { }

  async create(createCarDto: CarroDto) {
    this.carro.create(createCarDto);
  }

  findAll() {
    return this.carro.find();
  }

  findOne(id: number) {
    return this.carro.findOne({ _id: id });
  }

  update(id: number, updateData: AtualizaCarroDto) {
    return this.carro.findByIdAndUpdate({ _id: id, updateData });
  }

  remove(id: number) {
    return this.carro.deleteOne({ _id: id });
  }
}
