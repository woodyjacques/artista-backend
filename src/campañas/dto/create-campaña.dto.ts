import { ApiProperty } from '@nestjs/swagger';

export class CreateCampañaDto {
    @ApiProperty()
    titulo: string;  
    @ApiProperty()
    subtitulo: string;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    beneficios: string[];
    @ApiProperty()
    link: string;
    @ApiProperty()
    imagenUno?: string;  
    @ApiProperty()
    imagenDos?: string;  
    @ApiProperty()
    icono?: string;  
  }
  