import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/enums/TipoServicio";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(type => Usuarios, usuarios => usuarios.servicios)
    usuarios:Usuarios;

    @OneToOne(type => Cars, cars => cars.servicios)
    cars:Cars;

}