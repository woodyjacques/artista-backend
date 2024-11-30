import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventoDto } from './dto/create-evento.dto';
import { Evento } from './entities/evento.entity';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  async createEvento(eventoData: CreateEventoDto): Promise<{ message: string; evento: Evento }> {
    const newEvento = this.eventoRepository.create(eventoData);
    const savedEvento = await this.eventoRepository.save(newEvento);
    return {
      message: 'Evento creado con éxito',
      evento: savedEvento,
    };
  }

  async findAll(): Promise<Evento[]> {
    return this.eventoRepository.find();
  }

  async updateEvento(id: any, updateEvento: CreateEventoDto): Promise<{ message: string; evento: Evento }> {
    const evento = await this.eventoRepository.findOne({ where: { id } });
    if (!evento) {
      throw new NotFoundException(`Evento con id ${id} no encontrado`);
    }

    const updatedEvento = Object.assign(evento, updateEvento);
    await this.eventoRepository.save(updatedEvento);
    return {
      message: 'Evento actualizado con éxito',
      evento: updatedEvento,
    };
  }

  async deleteEvento(id: any): Promise<{ message: string }> {
    const evento = await this.eventoRepository.findOne({ where: { id } });
    if (!evento) {
      throw new NotFoundException(`Evento con id ${id} no encontrado`);
    }
    await this.eventoRepository.remove(evento);
    return { message: 'Evento eliminado con éxito' };
  }
}
