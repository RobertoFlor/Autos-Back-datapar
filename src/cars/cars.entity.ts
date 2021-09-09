import { ServiciosDto } from "src/Servicios/servicios.dto";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import {TipoServicio} from "../enums/TipoServicio";

@Entity()
export class Cars{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fabricante: string;
    
    @Column()
    modelo: string;

    @Column()
    situacion:string;

    @Column()
    AnioFabricacion: number;

    @Column()
    AnioModelo: number;

    @Column()
    kilometraje: number;

    @Column()
    chapa: string;

    @Column()
    chasis: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    descripcion: string;
    
    @OneToOne(() => Servicios, servicios => servicios.cars,{ cascade: true })
     servicios: Array<Servicios>;
    agendamiento: any;
}
