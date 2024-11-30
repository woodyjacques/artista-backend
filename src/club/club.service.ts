import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {}

  async createClub(clubData: CreateClubDto): Promise<{ message: string; club: Club }> {
    const newClub = this.clubRepository.create(clubData);
    const savedClub = await this.clubRepository.save(newClub);
    return {
      message: 'Club creado con éxito',
      club: savedClub,
    };
  }

  async findAll(): Promise<Club[]> {
    return this.clubRepository.find();
  }

  async updateClub(id: any, updateClub: CreateClubDto): Promise<{ message: string; club: Club }> {
    const club = await this.clubRepository.findOne({ where: { id } });
    if (!club) {
      throw new NotFoundException(`Club con id ${id} no encontrado`);
    }

    const updatedClub = Object.assign(club, updateClub);
    await this.clubRepository.save(updatedClub);
    return {
      message: 'Club actualizado con éxito',
      club: updatedClub,
    };
  }

  async deleteClub(id: any): Promise<{ message: string }> {
    const club = await this.clubRepository.findOne({ where: { id } });
    if (!club) {
      throw new NotFoundException(`Club con id ${id} no encontrado`);
    }
    await this.clubRepository.remove(club);
    return { message: 'Club eliminado con éxito' };
  }
}
