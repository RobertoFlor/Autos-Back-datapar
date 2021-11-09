import { IsOptional } from "class-validator";
import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TiposServicios {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsOptional()
    fecha_creacion: Date;

    @Column()
    @IsOptional()
    fecha_alteracion: Date;

    @Column()
    descripcion: string;
    
    @OneToMany(() => Agendamiento, agendamiento => agendamiento.tiposservicio,{ cascade:true })
    agendamiento: Agendamiento;

    @OneToMany(() => Servicios, servicio => servicio.tiposservicio,{ cascade:true})
    servicios: Servicios;   
    
}