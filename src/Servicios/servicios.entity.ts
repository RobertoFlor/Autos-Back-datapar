import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Cars } from "src/cars/cars.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoServicio: string;

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

    @ManyToOne(() => Cars, (cars) => cars.servicios, {
        nullable: false,
        onDelete: 'CASCADE',
      })
      cars: Cars;

      @ManyToOne(() => Usuarios, (usuarios) => usuarios.servicios, {
        nullable: false,
        onDelete: 'CASCADE',
      })
      usuarios: Usuarios;

      @ManyToOne(() => Agendamiento, (agendamiento) => agendamiento.servicios, {
        nullable: false,
        onDelete: 'CASCADE',
      })
      agendamiento: Agendamiento;
      
    }