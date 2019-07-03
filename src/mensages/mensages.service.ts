import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensage } from 'src/mensages/entities/mensage.entity';
import { Repository } from 'typeorm';
import { CreateMensageDto } from 'src/mensages/dto/create-mensage-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensage)
        private readonly mensageRepository: Repository<Mensage>,
    ){}

    async getAll(): Promise<Mensage[]>{
        return this.mensageRepository.find();
    }
    async createMensage(mensageNuevo: CreateMensageDto): Promise<Mensage>{
        const nuevo = new Mensage();
        nuevo.mensaje=mensageNuevo.mensaje;
        nuevo.nick=mensageNuevo.nick;
        return this.mensageRepository.save(nuevo);
    }
    async updateMensage(idMensage: number, mensajeActualziar: CreateMensageDto): Promise<Mensage>{
        const mensageupdate = await this.mensageRepository.findOne(idMensage);
        mensageupdate.nick=mensajeActualziar.nick;
        mensageupdate.mensaje=mensajeActualziar.mensaje;

        return await this.mensageRepository.save(mensageupdate);
    }
    async deleteMensage(idMensage: number): Promise<any>{
        return await this.mensageRepository.delete(idMensage);
    }
}
