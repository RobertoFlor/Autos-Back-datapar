import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users{
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

    @OneToMany(() => Servicios, (servicios) => servicios.users, {
        eager: true,
        persistence: true,
      })
      servicios: Servicios[];

    
      @OneToMany(() => Agendamiento, (agendamiento) => agendamiento.users, {
        eager: true,
        persistence: true,
      })
      agendamiento: Agendamiento[];
}