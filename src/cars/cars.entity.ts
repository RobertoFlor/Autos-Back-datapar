import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {TipoServicio} from "../enums/TipoServicio";

@Entity()
export class Cars{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    situacion:string;

    @Column()
    AnioFabricacion: number;

    @Column()
    AnioModelo: number;

    @Column()
    chapa: string;

    @Column()
    chasis: string;

    @Column()
    fabricante: string;

    @Column()
    kilometraje: number;

    @Column()
    modelo: string;

    @Column()
    titulo: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    descripcion: string;

    @Column()
    tipoServicio: TipoServicio;
}
