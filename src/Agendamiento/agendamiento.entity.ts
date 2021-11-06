import { Cars } from "src/cars/cars.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { Users } from "src/Users/users.entity";
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

    @OneToMany(type => Servicios, servicio => servicio.agendamiento,{ cascade: true })
    servicios: Array<Servicios>;

  
}
