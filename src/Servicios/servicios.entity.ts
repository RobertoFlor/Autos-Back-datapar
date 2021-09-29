import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

}