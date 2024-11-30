import { ApiProperty } from "@nestjs/swagger";

export class CreateClubDto {
    titulo: string;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    icono: string;
    @ApiProperty()
    membresia: string;
}
