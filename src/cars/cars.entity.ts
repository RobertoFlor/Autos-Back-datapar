import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //TAMBIEN CORREGIR 
    @Column()
    kilometraje: number;

    @Column()
    chapa: string;

    @Column()
    chasis: string;

    @Column()
    descripcion: string;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    //Para servicios
    @OneToMany(() => Servicios, (servicios) => servicios.cars, {
        eager: true,
        persistence: true,
      })
      servicios: Servicios[];

    //Para agendamientos
    @OneToMany(() => Agendamiento, (agendamiento) => agendamiento.cars, {
      eager: true,
      persistence: true,
    })
    agendamiento: Agendamiento[];

}