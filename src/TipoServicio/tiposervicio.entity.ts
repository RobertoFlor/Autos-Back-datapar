import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoServicio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion:Date;

    @OneToMany(() => Servicios, (servicios) => servicios.TipoServicio, {
        eager: true,
        persistence: true,
      })
      servicios: Servicios[];
    
}