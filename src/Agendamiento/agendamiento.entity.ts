
import { Cars } from "src/cars/cars.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
}
