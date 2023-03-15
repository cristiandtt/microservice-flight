import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightMSG } from 'src/common/constantes';
import { FlightDTO } from './dto/flight.dto';
import { FlightService } from './flight.service';


@Controller()
export class FlightController {
    constructor(private readonly vueloServicio:FlightService){
    }
    @MessagePattern(FlightMSG.INSERTAR)
    insertar(@Payload() vueloDTO:FlightDTO){
        return this.vueloServicio.insertar(vueloDTO);
    }
    @MessagePattern(FlightMSG.TODOS)
    todos()
    {
        return this.vueloServicio.todos();
    }
    @MessagePattern(FlightMSG.UNO)
    uno(@Payload() id:string){
        return this.vueloServicio.uno(id);
    }
    @MessagePattern(FlightMSG.ACTUALIZAR)
    actualizar(@Payload() paylod:any){
        return this.vueloServicio.actualizar(paylod.id, paylod.vueloDTO);
    }
   @MessagePattern(FlightMSG.ELIMINAR)
    eliminar(@Payload() id:string){
        return this.vueloServicio.eliminar(id);
    }
}
