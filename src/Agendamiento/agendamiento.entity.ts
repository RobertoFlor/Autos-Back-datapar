
import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/enums/TipoServicio";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Agendamiento{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    fecha_programada: Date;

    @ManyToOne(() => Agendamiento, agendamiento => agendamiento.cars,{ cascade: true })
    agendamiento: Array<Agendamiento>;
    cars:Cars;
}
