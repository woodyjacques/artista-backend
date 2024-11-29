import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
@Entity()
export class CampanaArtista {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  titulo: string;
  @Column()
  subtitulo: string;
  @Column()
  descripcion: string;
  @Column('simple-array') 
  beneficios: string[];
  @Column()
  link: string;
  @Column()
  imagenUno?: string;
  @Column()
  imagenDos?: string;
  @Column()
  icono?: string;
}
