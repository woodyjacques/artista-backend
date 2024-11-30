import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { ApiTags } from '@nestjs/swagger';
import { EventosService } from './eventos.service';
import { Evento } from './entities/evento.entity';

@ApiTags('eventos')
@Controller('eventos')
export class EventosController {
    constructor(private readonly eventosService: EventosService) {}

    @Post()
    async createEvento(@Body() newEvento: CreateEventoDto) {
        return await this.eventosService.createEvento(newEvento);
    }

    @Get()
    async findAll(): Promise<Evento[]> {
        return this.eventosService.findAll();
    }

    @Patch(':id')
    async updateEvento(
        @Param('id') id: string,
        @Body() updateEvento: CreateEventoDto,
    ) {
        return this.eventosService.updateEvento(id, updateEvento);
    }

    @Delete(':id')
    async deleteEvento(@Param('id') id: string) {
        return this.eventosService.deleteEvento(id);
    }
}
