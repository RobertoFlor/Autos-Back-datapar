import { Cars } from "src/cars/cars.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { TiposServicios } from "src/tipos-servicios/tipos-servicios.entity";
import { Usuarios } from "src/Usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agendamiento{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    fecha_Objetivo: Date;

    @Column()
    periodo: string;

    @Column()
    uso: string;

    @Column()
    tipoAgendamiento: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    
    @OneToMany(type => Servicios,servicios => servicios.agendamiento)
    servicios:Servicios;

    @ManyToOne(type => Cars, car => car.agendamiento)
    car: Cars;

    @ManyToOne(type => Usuarios, usuarios => usuarios.agendamiento)
    usuarios: Usuarios;
    
    @ManyToOne(() => TiposServicios, (tiposservicio) => tiposservicio.agendamiento, {})
    tiposservicio: TiposServicios;
  
}
