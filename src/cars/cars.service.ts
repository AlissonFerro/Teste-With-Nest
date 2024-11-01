import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ICar from 'src/Interfaces/Icar';
import { Car, CarDocument } from 'src/schema/car.schema';

@Injectable()
export class CarsService {
    constructor(@InjectModel(Car.name) private CarModel: Model<CarDocument>){}

    async create(car: ICar): Promise<Car> {
        const createdCar = new this.CarModel(car);
        return createdCar.save();
    }

    async findAll(): Promise<Car[]> {
        return this.CarModel.find().exec();
    }
}
