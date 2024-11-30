import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { ApiTags } from '@nestjs/swagger';
import { Club } from './entities/club.entity';
import { ClubService } from './club.service';

@ApiTags('clubs')
@Controller('clubs')
export class ClubController {
    constructor(private readonly clubsService: ClubService) {}

    @Post()
    async createClub(@Body() newClub: CreateClubDto) {
        return await this.clubsService.createClub(newClub);
    }

    @Get()
    async findAll(): Promise<Club[]> {
        return this.clubsService.findAll();
    }

    @Patch(':id')
    async updateClub(
        @Param('id') id: string,
        @Body() updateClub: CreateClubDto,
    ) {
        return this.clubsService.updateClub(id, updateClub);
    }

    @Delete(':id')
    async deleteClub(@Param('id') id: string) {
        return this.clubsService.deleteClub(id);
    }
}
