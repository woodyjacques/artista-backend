import { ApiProperty } from "@nestjs/swagger";

export class UpdateClubDto {
    titulo: string;
    @ApiProperty()
    descripcion: string;
    @ApiProperty()
    icono: string;
    @ApiProperty()
    membresia: string;
}
