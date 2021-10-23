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

    @ManyToOne(() => Cars, (cars) => cars.servicios, {
        nullable: false,
        onDelete: 'CASCADE',
      })
      cars: Cars;

      @ManyToOne(() => Users, (users) => users.servicios, {
        nullable: false,
        onDelete: 'CASCADE',
      })
      users: Users;

      @OneToMany(() => Servicios, (servicios) => servicios.agendamiento, {
        eager: true,
        persistence: true,
      })
      servicios: Servicios[];
      
}
