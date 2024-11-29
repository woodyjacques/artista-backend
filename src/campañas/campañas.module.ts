import { Module } from '@nestjs/common';
import { CampañasService } from './campañas.service';
import { CampañasController } from './campañas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampanaArtista } from './entities/campaña.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CampanaArtista])],
  controllers: [CampañasController],
  providers: [CampañasService],
})
export class CampañasModule {}
