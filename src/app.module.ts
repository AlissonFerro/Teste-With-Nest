import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/Car'), CarsModule,
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}