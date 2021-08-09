
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Column()
    fechaCreacion: Date;

}