import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { FlightSchema } from './schema/flight.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([{
      name:FLIGHT.name,
      useFactory:()=>FlightSchema,
    }])
  ],
  controllers: [FlightController],
  providers: [FlightService]
})
export class FlightModule {}
