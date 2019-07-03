import { Controller, Post, Body, Get, Put, Delete } from '@nestjs/common';
import { CreateMensageDto } from './dto/create-mensage-dto';

@Controller('mensages')
export class MensagesController {
    @Post()
    create(@Body() createMensageDto: CreateMensageDto){
        return 'Mensaje Creado';
    }

    @Get()
    getAll(){
        return 'Lista de Mesages';
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensageDto){
        return 'Mensaje Actualzido';
    }

    @Delete(':id')
    delete(){
        return 'Mensaje Eliminado';
    }

}
