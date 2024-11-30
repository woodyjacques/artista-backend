import { ApiProperty } from "@nestjs/swagger";

export class CreateEventoDto {
    @ApiProperty()
    titulo: string;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    ubicacion: string;
    @ApiProperty()
    link: string;
    @ApiProperty()
    imagen: string;
}


