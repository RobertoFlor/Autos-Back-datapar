import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreApellido: string;

    @Column()
    login: string;

    @Column()
    Contrasenia: string;

    @Column()
    situacion: Situacion;

    @Column()
    tipoUsuario: TipoUsuario;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion:Date;

    @OneToMany(() => Servicios, (servicios) => servicios.usuarios, {
        eager: true,
        persistence: true,
      })
      servicios: Servicios[];

    
      @OneToMany(() => Agendamiento, (agendamiento) => agendamiento.usuarios, {
        eager: true,
        persistence: true,
      })
      agendamiento: Agendamiento[];
}