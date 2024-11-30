import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ unique: true })
    titulo: string;
    @Column()
    descripcion: string;
    @Column()
    ubicacion: string;
    @Column()
    link: string;
    @Column()
    imagen: string;
}
