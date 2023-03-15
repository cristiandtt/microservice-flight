import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FLIGHT } from '../common/models/models';
import { Model } from 'mongoose';
import { FlightDTO } from './dto/flight.dto';
import { IFlight } from 'src/common/interfaces/flight.interface';


@Injectable()
export class FlightService {
    constructor(@InjectModel(FLIGHT.name) private readonly vuelosModelos:Model<IFlight>){}

    async insertar(vueloDto:FlightDTO):Promise<IFlight>{
        const nuevoVuelo = new this.vuelosModelos(vueloDto);
        return await nuevoVuelo.save()
    }

    async todos():Promise<IFlight[]>{
        return await this.vuelosModelos.find();
    }

    async uno(id:string):Promise<IFlight>{
        return await this.vuelosModelos.findById(id);
    }

    async actualizar(id:string, vueloDT:FlightDTO):Promise<IFlight>{
    return await this.vuelosModelos.findByIdAndUpdate(id,vueloDT,{new:true});    
    }

    async eliminar(id:string){
        await this.vuelosModelos.findByIdAndDelete(id);
        return {status:HttpStatus.OK, msg:'Eliminado'}
    }

}
