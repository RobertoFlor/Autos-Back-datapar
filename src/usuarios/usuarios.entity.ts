
import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { ServiciosDto } from "src/Servicios/servicios.dto";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreApellido: string;

    @Column()
    Contrasenia: string;

    @Column()
    login: string;

    @Column()
    situacion: Situacion;

    @Column()
    tipoUsuario: TipoUsuario;

    @Column()
    fechaCreacion: Date;

    @OneToOne(() => Servicios, servicios => servicios.usuarios,{ cascade: true })
     servicios: Array<Servicios>;

}