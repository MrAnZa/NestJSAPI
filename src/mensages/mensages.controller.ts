import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensageDto } from './dto/create-mensage-dto';
import { MensajesService } from 'src/mensages/mensages.service';
import { response } from 'express';

@Controller('mensages')
export class MensagesController {
    constructor(private mensajeService: MensajesService){

    }

    @Post()
    create(@Body() createMensageDto: CreateMensageDto, @Res() response){
        this.mensajeService.createMensage(createMensageDto).then(
            mensaje => {
                response.status(HttpStatus.CREATED).json(mensaje);
            }
        ).catch(
            ()=>{
                response.status(HttpStatus.FORBIDDEN).json({'mensaje':'Error en la Creacion'});
            }
        );
    }

    @Get()
    getAll(@Res() response){
        this.mensajeService.getAll().then(
            mensajesList =>{
                response.status(HttpStatus.OK).json(mensajesList);
            }
        ).catch(
            ()=>{
                response.status(HttpStatus.FORBIDDEN).json({'mensaje':'Error en la Obtencion del mensaje'});
            }
        );
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensageDto,@Res() response,@Param('id') idMensaje){
        this.mensajeService.updateMensage(idMensaje,updateMensajeDto).then(
            mensajeActializdo=>{
                response.status(HttpStatus.OK).json(mensajeActializdo);
            }
        ).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({'mensaje':'Error en la Actualziacion del mensaje'});
        })
    }

    @Delete(':id')
    delete(@Res() response,@Param('id') idMensaje){
        this.mensajeService.deleteMensage(idMensaje).then(
            res=>{
                response.status(HttpStatus.OK).json(res);
            }
        ).catch(()=>{
                response.status(HttpStatus.FORBIDDEN).json({'mensaje':'Error en la Eliminacion del Mensaje'});
            }
        )
    }

}
