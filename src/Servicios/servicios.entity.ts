import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Cars } from "src/cars/cars.entity";
import { TiposServicios } from "src/tipos-servicios/tipos-servicios.entity";
import { TiposServiciosModule } from "src/tipos-servicios/tipos-servicios.module";
import { Usuarios } from "src/Usuarios/usuarios.entity";

import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    KmInicial: number;

    @Column()
    KmFinal: number;

    @Column()
    ValorServicio: number;

    @Column()
    estadoServicio: string;

    @Column()
    fechaInicio: Date;

    @Column()
    fechaFinal: Date;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @ManyToOne(type => Usuarios, usuarios => usuarios.servicios)
    usuarios: Usuarios;

    @ManyToOne(type => Cars, car => car.servicios)
    car: Cars;

    @ManyToOne(type => Agendamiento, agendamiento => agendamiento.servicios)
    agendamiento : Agendamiento;

    @ManyToOne(type => TiposServicios, tipoServicio => tipoServicio.servicios)
    tiposservicio: TiposServicios;
    
    }