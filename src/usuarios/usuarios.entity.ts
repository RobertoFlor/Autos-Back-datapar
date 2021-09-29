import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";
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
}