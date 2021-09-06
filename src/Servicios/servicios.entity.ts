
import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/enums/TipoServicio";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
    tipoServicio: TipoServicio;

    @Column()
    ValorServicio: number;

    @Column()
    fechaCreacion: Date;

    @ManyToOne(type => Usuarios, usuarios => usuarios.servicios)
    usuarios:Usuarios;

    @ManyToOne(type => Cars, cars => cars.servicios)
    cars:Cars;

}