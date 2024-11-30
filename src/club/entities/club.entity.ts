import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Club {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    titulo: string;
    @Column()
    descripcion: string;
    @Column()
    icono: string;
    @Column()
    membresia: string;
}
