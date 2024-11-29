import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCampañaDto } from './dto/create-campaña.dto';
import { CampanaArtista } from './entities/campaña.entity';

@Injectable()
export class CampañasService {
  constructor(
    @InjectRepository(CampanaArtista)
    private readonly campanaRepository: Repository<CampanaArtista>,
  ) { }

  async createCampana(campans: CreateCampañaDto): Promise<{ message: string; campana: CampanaArtista }> {
    const newCampana = this.campanaRepository.create(campans);
    const savedCampana = await this.campanaRepository.save(newCampana);
    return {
      message: 'Campaña creada con éxito',
      campana: savedCampana,
    };
  }

  async findAll(): Promise<CampanaArtista[]> {
    return this.campanaRepository.find();
  }

  async updateCampana(id: any, updateCampaña: CreateCampañaDto): Promise<{ message: string; campana: CampanaArtista }> {
    const campana = await this.campanaRepository.findOne({ where: { id } });
    if (!campana) {
      throw new NotFoundException(`Campaña con id ${id} no encontrada`);
    }

    const updatedCampana = Object.assign(campana, updateCampaña);
    await this.campanaRepository.save(updatedCampana);
    return {
      message: 'Campaña actualizada con éxito',
      campana: updatedCampana,
    };
  }

  async deleteCampana(id: any): Promise<{ message: string }> {
    const campana = await this.campanaRepository.findOne({ where: { id } });
    if (!campana) {
      throw new NotFoundException(`Campaña con id ${id} no encontrada`);
    }
    await this.campanaRepository.remove(campana);
    return { message: 'Campaña eliminada con éxito' };
  }

}
