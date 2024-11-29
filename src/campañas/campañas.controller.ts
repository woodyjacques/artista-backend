import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { CreateCampañaDto } from './dto/create-campaña.dto';
import { ApiTags } from '@nestjs/swagger';
import { CampañasService } from './campañas.service';
import { CampanaArtista } from './entities/campaña.entity';

@ApiTags('campanas')
@Controller('campanas')
export class CampañasController {
    constructor(private readonly campanasService: CampañasService) { }

    @Post()
    async createCampaña(@Body() newCampaña: CreateCampañaDto) {
        return await this.campanasService.createCampana(newCampaña);
    }

    @Get()
    async findAll(): Promise<CampanaArtista[]> {
        return this.campanasService.findAll();
    }

    @Patch(':id')
    async updateCampana(
        @Param('id') id: string,
        @Body() updateCampaña: CreateCampañaDto,
    ) {
        return this.campanasService.updateCampana(id, updateCampaña);
    }

    @Delete(':id')
    async deleteCampana(@Param('id') id: string) {
        return this.campanasService.deleteCampana(id);
    }
}
