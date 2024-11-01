import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import ICar from 'src/Interfaces/Icar';
import { Car } from 'src/schema/car.schema';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService){}

    @Post()
    create(@Body() car: ICar): Promise<Car> {
        return this.carService.create(car);
    }

    @Get()
    findAll(): Promise<Car[]>{
        return this.carService.findAll();
    }
}
